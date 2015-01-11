var React = require('react');
var Reflux = require('reflux');
var Firebase = require("firebase");
var Router = require('react-router');
var _ = require('underscore');
//var css = require("css!./materialize.min.css");

var UserActions = Reflux.createActions([
  "login",
  "logout"
])

var fb = new Firebase("https://brecon.firebaseio.com/");

fb.onAuth(function(authData) {
  console.log('auth data seen')
  console.log(authData)
  if (authData) {
        fb.child("users").child(authData.uid).set(authData);
  }
});

//fb.child('categories').push({title: 'Gastroenterology'});
//fb.child('categories').push({title: 'Dermatology'});

var UserStore = Reflux.createStore({
  listenables: [UserActions],

  init: function() {
    this.user = {};
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

// needs slug

var Category = React.createClass({
  render: function() {
    return (<li><Router.Link={category} params={{slug: {this.props.slug}}}>{ this.props.title }</Router.Link></li>)
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

var routes = (
  <Router.Route handler={App}>
  <Router.DefaultRoute handler={Main} />
  <Router.Route name='profile' handler={Profile} />
  <Router.Route name='category' handler={Question} />

  <Router.Route name='logout' handler={Logout} />
  </Router.Route>
);




      Router.run(routes, function (Handler, state) {
        //Actions.change(state);
        React.render(<Handler />, document.body);
      })
      //<Router.Route name="categories" path="c/?" handler={CourseList} />,

      //React.render(<App />, document.body);
