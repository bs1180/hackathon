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
/*
fb.child('users').on('child_added', function(newUser) {
  console.log(newUser.val())
  newUser.ref().set({score: 0})
})
*/

fb.onAuth(function(authData) {
  console.log('auth data seen')
  console.log(authData)
  if (authData) {
    fb.child('users').once('value', function(snapshot) {
      if (!snapshot.hasChild(authData.uid)) {
        //console.log('new child')
        var newUser = fb.child('users').child(authData.uid);
        newUser.set(authData);
        newUser.child('score').set(0);
        //console.log(newUser);
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
  componentWillMount: function() {
    var self = this;
    fb.child('users').child(this.props.user.uid).child('score').on('value', function(snapshot) {
      if (snapshot) {
        self.setState({score: snapshot.val()})
      }
    })
  },
  getInitialState: function() {
    return ({score: ''})
  },
  render: function() {
    var provider = this.props.user.provider;
    var name = this.props.user[provider]['displayName'];
    return (
        <header>
        <nav>
        <div className="nav-wrapper blue-grey">
        <a href="/" className="brand-logo"><i className="mdi-maps-local-library"></i>CME Community</a>

        <ul id="nav-mobile" className="right side-nav">
        <li><Router.Link to="profile">{ name } - { this.state.score} points</Router.Link></li>
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
      <div className="row">
      <Router.Link to='add'>Add a question</Router.Link>
      </div>
      </div>
    )
  }
})

var CategoryList = React.createClass({
  componentWillMount: function() {
    var self = this;
    //var ref = new Firebase("https://brecon.firebaseio.com/")
    fb.child('categories').on('value', function(snapshot) {
      self.replaceState({loading: false, categories: snapshot.val()})
    });

  },
  componentWillUnmount: function() {
    fb.child('categories').off('value');
  },
  getInitialState: function() {
    return {loading: true, categories: {}}
  },
  render: function() {
    var categories = _.map(this.state.categories, function(c, i, v) {
      return (<Category key={i} {...c} />)
    })
    var show = this.state.loading ? <Loading /> : categories;
    return (<div className="row">{ show }</div>)
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

          </div>

          <div className="card-content">
          <strong>{ this.props.title }</strong>
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
          <h1 className="header center orange-text"><i className="mdi-maps-local-library"></i> CME Community</h1>
          <div className="row center">
            <h5 className="header col s12 light">The fun way to revise your medical knowledge.</h5>
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

          <h5 className="center">Available everywhere</h5>

          <p className="light">Lorem ipsum</p>
          </div>
        </div>

      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center light-blue-text">
            <i className="mdi-social-group"></i>
          </h2>

          <h5 className="center">Work together</h5>

          <p className="light">Lorem ipsum</p>
        </div>
      </div>

      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center light-blue-text">
            <i className="mdi-action-settings"></i>
          </h2>

        <h5 className="center">Be rewarded</h5>

        <p className="light">Redeem your CME points for fun rewards.</p>
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

        <p className='small'>An account will be created automatically and deleted after the event.</p>

      </div>)

    }
})

var Loading = React.createClass({
  render: function() {
    return (
      <div className="preloader-wrapper big active">

      <div className="spinner-layer spinner-red">
    <div className="circle-clipper left">
    <div className="circle"></div>
    </div><div className="gap-patch">
    <div className="circle"></div>
    </div><div className="circle-clipper right">
    <div className="circle"></div>
    </div>
    </div>
    </div>
    )
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
    var response = this.state.user ? <Wrapper user={this.state.user} /> : <Public />;
    return response;

  }
})

var Wrapper = React.createClass({
  render: function() {
    return (
      <div>
    <Header user={this.props.user} />

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

var QuestionWrapper = React.createClass({
  mixins: [Router.State],

  loadQuestions: function(categoryKey) {
    var self = this;

    fb.child('question')
    .orderByChild('category')
    .equalTo(categoryKey)
    .once('value', function(snapshot) {
      console.log('snapshot returned')
      console.log(snapshot)
      if (snapshot) {
        self.setState({loading: false, questions: snapshot.val()})
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
        self.setState({categoryKey: _.keys(snapshot.val())[0]})
        self.loadQuestions(_.keys(snapshot.val())[0]);
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
      questions: {},
      question: 0
    })
  },

  render: function() {
    //var question = this.state.questions[this.state.question];
    console.log(this.state.questions.length)
/*
    var q = this.state.loading ? (<p>Loading</p>) : (((this.state.questions.length) > 0) ? <Question question={this.state.questions[this.state.question]} /> : <p>No questions</p>);
    return q;
    */
    return (<p>Show question here</p>)
  }
})

var Question = React.createClass({

  render: function() {
    /*
    var answers = this.props.answers.map(function(a) {
      return <li>{ a }</li>
    })
    */
    return (<div>
      <h5>{ this.props.question.title }</h5>

      </div>)
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
    <Router.Route name='category' path='/category/:slug' handler={QuestionWrapper} />
    <Router.DefaultRoute handler={Main} />
    <Router.Route name='logout' handler={Logout} />
  </Router.Route>

);


Router.run(routes, function (Handler, state) {
  //Actions.change(state);
  React.render(<Handler />, document.body);
})
