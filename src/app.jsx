var React = require('react');
var Reflux = require('reflux');
var Firebase = require("firebase");
var Router = require('react-router');
var _ = require('underscore');
//var css = require("css!./materialize.min.css");

var UserActions = Reflux.createActions([
  "login",
  "logout",
  "loggedIn"
])
/*
UserActions.login.listen = function(provider) {
  fb.authWithOAuthPopup(provider, function(data) {
    console.log(data)
  })
}
*/
var fb = new Firebase("https://brecon.firebaseio.com/");
// switch to a transaction - https://gist.github.com/anantn/4323967

fb.onAuth(function(authData) {
  console.log('auth data seen')
  console.log(authData)
  if (authData) {
    //fb.child('users').child(authData.id).once('value', function(userSnapshot) {
      //if (!userSnapshot) { // they've been here before
      fb.child("users").child(authData.uid).set(authData);
    //  }
    //})
    UserActions.loggedIn(authData)
  }
});

//fb.child('categories').push({title: 'Gastroenterology'});
//fb.child('categories').push({title: 'Dermatology'});
/*
fb.child('questions').push({category: '-JfMM91pNe-6toATwy8G', title: 'What is this?'});
fb.child('questions').push({category: '-JfMM91pNe-6toATwy8G', title: 'What is that?'});
*/

var UserStore = Reflux.createStore({
  listenables: [UserActions],

  init: function() {
    this.user = {};
  },

  onLoggedIn: function(data) {
    this.user = data;
    this.trigger(data)
  },

  login: function(provider) {
    fb.authWithOAuthPopup(provider, function(data) {
      console.log(data)
    })
  },

  logout: function() {
    fb.unauth()
  }

})

var Header = React.createClass({ // needs user details
  getDefaultProps: function() {
    return ({loggedIn : false})
  },

  render: function() {
    var loginOrOut = this.props.loggedIn ?
      <Router.Link to="profile">Profile</Router.Link> :
      <Router.Link to="logout">Sign in</Router.Link>;

    return (
        <header>
        <nav>
        <div className="nav-wrapper blue-grey">
        <a href="/" className="brand-logo"><i className="mdi-maps-local-library"></i>CME Community</a>

        <ul id="nav-mobile" className="right side-nav">
        <li>{ loginOrOut }</li>
        </ul>
        </div>
        </nav>
        </header>)
      }
    })


var Main = React.createClass({
  render: function() {
    // first time flag
    return (
      <div>
      <h3>Start on your CME</h3>
      <CategoryList />
      </div>
    )
  }
})

var CategoryList = React.createClass({
  componentWillMount: function() {
    var self = this;
    //var ref = new Firebase("https://brecon.firebaseio.com/")
    fb.child('categories').on('value', function(snapshot) {
      self.replaceState({categories: snapshot.val()})
    });

  },
  componentWillUnmount: function() {
    fb.child('categories').off('value');
  },
  getInitialState: function() {
    return {categories: {}}
  },
  render: function() {
    var categories = _.map(this.state.categories, function(c, i, v) {
      return (<Category key={i} {...c} />)
    })
    return (<ul>{ categories }</ul>)
  }
})

var Category = React.createClass({
  render: function() {
    var slug = this.props.slug;
    return (<li>
      <Router.Link to='category' params={{slug: slug}}>
      { this.props.title }
      </Router.Link>
      </li>)
  }
})

var Login = React.createClass({
  handleLogin: function(provider) {
    UserActions.login(provider);
  },
  render: function() {
    return (<div className="row">
    <div className="col s12">
    <div className="valign-demo valign-wrapper">
    <h5>Please login to begin</h5>
    <img onClick={this.handleLogin('twitter')} src='images/sign-in-with-twitter-gray.png' />
    <button onClick={this.handleLogin('facebook')}>Facebook</button>

    </div>

    </div>
    </div>)
  }
})

var Profile = React.createClass({
  render: function() {
    return (<div>This could be your profile</div>)
  }
})

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="blue-grey lighten-3" >
      <div className="footer-copyright">
      <div className="container">
      Proudly made in Wien
      </div>
      </div>
      </footer>)
    }
  })

var App = React.createClass({
  mixins: [Reflux.connect(UserStore, this.replaceState)],

  getInitialState: function() {
    return {loggedIn: true}
  },

  render: function() {
    var main = this.state.loggedIn ? <Router.RouteHandler /> : <Login />

    return (
      <div>
        <Header />

      <main>
        <div className="container">
          <div className="row">{ main }</div>
        </div>
      </main>

        <Footer />
      </div>
    )
  }
})

var Logout = React.createClass({
  componentDidMount: function () {
    UserActions.logout();
  },

  render: function () {
    return <p>You are now logged out</p>;
  }
});

var Question = React.createClass({
  mixins: [Router.State],

  componentWillMount: function() {
    var self = this;
    fb
    .child('categories')
    .orderByChild('slug')
    .equalTo(this.getParams().slug)
    .limitToFirst(1)
    .once('value', function(snapshot) {
      if (snapshot) {
        console.log(_.keys(snapshot.val())[0])

        var k = _.keys(snapshot.val())[0];

          fb.child('question')
            .orderByChild('category')
            .equalTo(k)
            .limitToFirst(1)
            .once('value', function(question) {
              if (question) {
                console.log(question.val())
                self.setState({question: _.values(question.val())[0]})
              }

            })
          self.setState({category: snapshot.val()})
        }
      })
  },

  mark: function(data) {
      console.log('mark')
  },

  getInitialState: function() {
    return ({loading: true,
      question: { title: '', answers: []}
    })
  },
  // connect to category, then just .first()
  // upon answer, push to user
  render: function() {
    var question = this.state.question.title || ''
    var answers = this.state.answers.map(function(a) {
      return <li onClick={this.mark}>{ a}</li>
    })
    return (<p>{ question } <ul>{ answers}</ul></p>)
  }
})

var LeaderBoard = React.createClass({
  componentWillMount: function() {

    fb.child('users').orderByChild('score').limitToLast(10).on('value', function(snapshot) {
      console.log(snapshot.val())
    })

  },
  getInitialState: function() {
    return ({users: []})
  },
  render: function() {
    var users = this.state.users.map(function(u, k) {
      return (<li><LeaderBoardEntry key={k} {...u} /></li>)
    })

    return (<div><h2>Top ten players</h2><ul>{ users }</ul></div>)

  }
})

var LeaderBoardEntry = React.createClass({
  render: function() {
    return (<p>Entry goes here</p>)
  }
})

//TODO: Remove Listeners

var routes = (
  <Router.Route handler={App}>
  <Router.DefaultRoute handler={Main} />
  <Router.Route name='profile' handler={Profile} />
  <Router.Route name='high-scores' handler={LeaderBoard} />

  <Router.Route name='category' path='/category/:slug' handler={Question} />
  <Router.Route name='logout' handler={Logout} />
  </Router.Route>
);




      Router.run(routes, function (Handler, state) {
        //Actions.change(state);
        React.render(<Handler />, document.body);
      })
      //<Router.Route name="categories" path="c/?" handler={CourseList} />,

      //React.render(<App />, document.body);
