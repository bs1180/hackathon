var React = require('react');
var Reflux = require('reflux');
var Firebase = require("firebase");
var Router = require('react-router');
var _ = require('underscore');
//var css = require("css!./materialize.min.css");

/*
upload/create mechanism
show answers and increment scores
seed with content
prepare explaination

*/

var UserActions = Reflux.createActions([
  "login",
  "logout",
  "loggedIn"
])

var fb = new Firebase("https://brecon.firebaseio.com/");
// switch to a transaction - https://gist.github.com/anantn/4323967

fb.onAuth(function(authData) {
  console.log('auth data seen')
  console.log(authData)
  if (authData) {
    fb.child('users').once('value', function(snapshot) {
      if (!snapshot.hasChild(authData.uid)) {
        console.log('new child')
        var newUser = fb.child("users").child(authData.uid).set(authData);
        console.log(newUser);
      }
    })

    UserActions.loggedIn(authData)
  }
});
/*
fb.child('categories').push({title: 'User Submitted'});
fb.child('categories').push({title: 'Hackathon'});
*/
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
    return (
        <header>
        <nav>
        <div className="nav-wrapper blue-grey">
        <a href="/" className="brand-logo"><i className="mdi-maps-local-library"></i>CME Community</a>

        <ul id="nav-mobile" className="right side-nav">
        <li><Router.Link to="profile">Profile</Router.Link></li>
        <li><Router.Link to='high-scores'>High Scores</Router.Link></li>
        <li><Router.Link to='logout'>Logout</Router.Link></li>

        </ul>
        </div>
        </nav>
        </header>)
      }
    })


var Main = React.createClass({

  render: function() {
    // first time flag?
    return (
      <div>
      <h3>Start on your CME</h3>
      <CategoryList />
      <Router.Link to='add'>Add a question</Router.Link>
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
    return (<div className="row">{ categories }</div>)
  }
})

var Category = React.createClass({
  render: function() {
    var slug = this.props.slug;
    var description = this.props.description || '';
    var image = this.props.image;
    return (
      <div className="col s4 m4">
        <div className="card">

          <div className="card-image">
              <img className="responsive-img" src={ image } />
              <span className="card-title">{ this.props.title }</span>
          </div>

          <div className="card-content">
          <p>{ description }</p>
          </div>

          <div className="card-action">
            <Router.Link to='category' params={{slug: slug}}>
            Start <i className="mdi-navigation-arrow-forward"></i>
            </Router.Link>
          </div>

        </div>
      </div>)
  }
})

var AddQuestion = React.createClass({
  render: function() {

    return (<div className="row">
    <form className="col s12">

      <div className="row">
        <div className="input-field col s12">
        <input id="question" type="text" className="validate" />
        <label htmlFor="question">Question</label>
        </div>
      </div>

      <div className="row">
      <div className="input-field col s12">
      <input id="correctAnswer" type="text" className="validate" />
      <label htmlFor="question">Correct Answer</label>
      </div>
      </div>

      <div className="row">
      <div className="input-field col s12">
      <input id="false1" type="text" className="validate" />
      <label htmlFor="false2">False Answer</label>
      </div>
      </div>

      <div className="row">
      <div className="input-field col s12">
      <input id="feedbacl" type="text" className="validate" />
      <label htmlFor="feedback">Feedback</label>
      </div>
      </div>


    </form>
    </div>)
    }
})



var Profile = React.createClass({
  render: function() {
    return (<div>This could be your profile</div>)
  }
})

var Public = React.createClass({
  getInitialState: function() {
    return {showLogin: false}
  },

  showLogin: function() {
    this.setState({ showLogin: true })
  },

  render: function() {
    var login = this.state.showLogin ? (<Login />) : (<button onClick={ this.showLogin } className="btn-large waves-effect waves-light orange">Get Started</button>);

    return (
      <div>
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <br /><br />
          <h1 className="header center orange-text">CME Community</h1>
          <div className="row center">
            <h5 className="header col s12 light">The fun way to revise your medical knowledge and gain your CME credits</h5>
          </div>

          <div className="row center">
          { login }


          </div>
      <br /><br />

      </div>
      </div>

      <div className="container">
      <div className="section">

    <div className="row">
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-blue-text">
              <i className="mdi-image-flash-on"></i>
            </h2>

          <h5 className="center">Speeds up development</h5>

          <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
          </div>
        </div>

      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center light-blue-text">
            <i className="mdi-social-group"></i>
          </h2>

          <h5 className="center">User Experience Focused</h5>

          <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
        </div>
      </div>

      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center light-blue-text">
            <i className="mdi-action-settings"></i>
          </h2>

        <h5 className="center">Easy to work with</h5>

        <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
        </div>
      </div>

    </div>

</div>

      </div>
</div>
    )
  }
})

var LoginButton = React.createClass({
  handleLogin: function() {
    UserActions.login(this.props.provider);
  },
  render: function() {
    return (<button className="btn waves-effect waves-light orange" onClick={ this.handleLogin }>{ this.props.name }</button>)
  }
})

var Login = React.createClass({
  render: function() {
    return (
      <div>
        <p>Choose your login method:</p>

        <LoginButton name='Twitter' provider='twitter' />
        <LoginButton name='Facebook' provider='facebook' />

        <p>An account will be created automatically</p>

      </div>)

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
  mixins: [Reflux.listenTo(UserStore, 'onUserChange')],

  onUserChange: function(data) {
    console.log('user change called')
    console.log(data)
    this.replaceState({user: data})
  },

  getInitialState: function() {
    return {user: null}
  },

  render: function() {
    var response = this.state.user ? <Wrapper /> : <Public />;
    return response;

  }
})

var Wrapper = React.createClass({
  render: function() {
    return (
      <div>
    <Header />

    <main>
      <div className="container">
        <div className="row"><Router.RouteHandler /></div>
      </div>
    </main>

    <Footer />
    </div>)
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

  loadQuestion: function() {
    //this.state.key
    var self = this;
    fb.child('question')
    .orderByChild('category')
    .equalTo(this.state.categoryKey)
    .limitToFirst(1)
    .once('value', function(question) {
      if (question) {
        console.log(question.val())
        self.setState({question: _.values(question.val())[0]})
      }

    })
  },

  componentWillMount: function() {
    var self = this;
    fb
    .child('categories')
    .orderByChild('slug')
    .equalTo(this.getParams().slug)
    .limitToFirst(1)
    .once('value', function(snapshot) {
      if (snapshot) {
        //console.log(_.keys(snapshot.val())[0])
        self.setState({categoryKey: _.keys(snapshot.val())[0]})
        self.loadQuestion();
        //self.setState({category: snapshot.val()})
        }
      })
  },

  mark: function(data) {
      console.log('mark')
  },

  getInitialState: function() {
    return ({
      loading: true,
      categoryKey: '',
      question: {
        title: '',
        answers: []
      },

    })
  },
  // connect to category, then just .first()
  // upon answer, push to user
  render: function() {
    var question = this.state.question.title;
    var answers = this.state.question.answers.map(function(a) {
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
  <Router.Route path='/' handler={App}>
    <Router.Route name='profile' handler={Profile} />
    <Router.Route name='add' handler={AddQuestion} />
    <Router.Route name='high-scores' handler={LeaderBoard} />
    <Router.Route name='category' path='/category/:slug' handler={Question} />
    <Router.DefaultRoute handler={Main} />
    <Router.Route name='logout' handler={Logout} />
  </Router.Route>

);


Router.run(routes, function (Handler, state) {
  //Actions.change(state);
  React.render(<Handler />, document.body);
})
