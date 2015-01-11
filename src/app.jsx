var React = require('react');
var Reflux = require('reflux');
var Firebase = require("firebase");
var Router = require('react-router');
var _ = require('underscore');

var UserActions = Reflux.createActions([
  "login",
  "logout",
  "loggedIn",
  "correctAnswer"
])

var fb = new Firebase("https://brecon.firebaseio.com/");

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

var UserStore = Reflux.createStore({
  listenables: [UserActions],

  init: function() {
    this.user = {};
  },

  // onSubmitQuestion;

  onCorrectAnswer: function() {
    console.log('store');
    var userScore = fb.child('users').child(this.user.uid).child('score');
    userScore.transaction(function (current_value) {
      return (current_value || 0) + 5;
    });

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

var Header = React.createClass({
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
        <Router.Link to='main'><span className="brand-logo"><i className="mdi-maps-local-library"></i> CME Community</span></Router.Link>

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
    return (
      <div>

      <CategoryList />
        <div className="row center">
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
      <div className="section no-pad-bot">
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

          <p className="light">Complete your CME at a time and place that suits you.</p>
          </div>
        </div>

      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center light-blue-text">
            <i className="mdi-social-group"></i>
          </h2>

          <h5 className="center">Work together</h5>

          <p className="light">Contribute interesting cases and demonstrate your knowledge versus your colleagues</p>
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

        <LoginButton name='Twitter' provider='twitter' />&nbsp;
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
      if (snapshot) {
        self.setState({
          loading: false,
          questions: snapshot.val()
        })
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

        self.setState({
          categoryKey: _.keys(snapshot.val())[0]
          })
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

  getRandom: function() {
    var count=0;
    for (var prop in this.state.questions) {
      if (Math.random() < 1/++count)
        return this.state.questions[prop];
    }

  },

  render: function() {

    var show = this.state.loading ? <Loading /> : <Question question={this.getRandom() }/>;

/*
    var q = this.state.loading ? (<p>Loading</p>) : (((this.state.questions.length) > 0) ? <Question question={this.state.questions[this.state.question]} /> : <p>No questions</p>);
    return q;
    */
    return show;
  }
})

var Question = React.createClass({
  getInitialState: function() {
    return {answered: false, correct: false}
  },

  handleChange: function(e) {
    console.log('handled')
    this.setState({selectedAnswer: e});
  },

  mark: function(e) {
    e.preventDefault();
    console.log('answered');
    if (this.state.selectedAnswer) {
      this.setState({correct: true})
      UserActions.correctAnswer();
    }
    this.setState({answered: true});
  },

  render: function() {
    switch (this.props.question.type) {
      case 'image':
        var show = <ImageWrapper url={this.props.question.url} />;
        break;
      case 'video':
        var show = <VideoWrapper url={this.props.question.url} />;
        break;
      case 'text':
        var show = ''
        break;
    }

    var feedback = this.state.answered ? <FeedbackWrapper correct={this.state.correct} feedback={ this.props.question.feedback } /> : '';

    return (<div>
      <br />
      { show }
      <p>{ this.props.question.title }</p>
      { feedback }
      <form onSubmit={this.mark}>
      <AnswerWrapper handleChange={this.handleChange.bind(this, true)} id='0' correct='true' answer={ this.props.question.correct } />
      <AnswerWrapper handleChange={this.handleChange.bind(this, false)} id='1' correct='false' answer={ this.props.question.f1 } />
      <AnswerWrapper handleChange={this.handleChange.bind(this, false)} id='2' corret='false' answer={ this.props.question.f2 } />
      <AnswerWrapper handleChange={this.handleChange.bind(this, false)} id='3' correct='false' answer={ this.props.question.f3 } />
      <button className="btn" type='submit'>Submit</button>
      </form>
      </div>)
  }
})

var FeedbackWrapper = React.createClass({
  render: function() {
    var classes = this.props.correct ? 'green lighten-1' : 'red lighten-1'

    return (<p className={classes}>{ this.props.feedback }</p>)
  }
})

var AnswerWrapper = React.createClass({
  render: function() {
    return (
      <p>
      <input onChange={this.props.handleChange} name="answer" type="radio" id={this.props.id} value={this.props.correct} />
      <label htmlFor={ this.props.id}>{ this.props.answer }</label>
      </p>
    )
  }
})

var ImageWrapper = React.createClass({
  render: function() {
    return (<img className="responsive-img" src={ this.props.url } />)
  }
})

var VideoWrapper = React.createClass({
  render: function() {
    return (<div className="video-container">
    <iframe width="853" height="480" src={ this.props.url } frameBorder="0" allowFullScreen></iframe>
    </div>)
  }
})

var LeaderBoard = React.createClass({
  componentWillMount: function() {
    var self = this;
    fb.child('users').orderByChild('score').limitToLast(10).on('value', function(snapshot) {
      self.setState({users: snapshot.val()})
    })

  },
  getInitialState: function() {
    return ({users: {}})
  },
  render: function() {
    var users = _.map(this.state.users, function(u, k) {
      return (<LeaderBoardEntry key={u.uid} user={u} />)
    })

    return (<div><h2>Top ten players</h2><table className='striped'>
    <thead>
      <tr><th>Name</th><th>Score</th></tr>
    </thead>
    <tbody>
    { users }
    </tbody>
    </table>
    </div>)

  }
})

var LeaderBoardEntry = React.createClass({
  render: function() {
    var provider = this.props.user.provider;
    var name = this.props.user[provider]['displayName'];

    return (<tr><td>{ name }</td><td>{ this.props.user.score }</td></tr>)
  }
})

//TODO: Remove Listeners

var routes = (
  <Router.Route path='/' handler={App}>
    <Router.Route name='profile' handler={Profile} />
    <Router.Route name='add' handler={AddQuestion} />
    <Router.Route name='high-scores' handler={LeaderBoard} />
    <Router.Route name='category' path='/category/:slug' handler={QuestionWrapper} />
    <Router.DefaultRoute name='main' handler={Main} />
    <Router.Route name='logout' handler={Logout} />
  </Router.Route>

);


Router.run(routes, function (Handler, state) {
  //Actions.change(state);
  React.render(<Handler />, document.body);
})
