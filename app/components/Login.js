'use strict';

var React = require('react');
var DriveIn = require('react-drive-in');

var $ = require('jquery');
//require('../frontier.mp4');
var Router = require('react-router');

var TodoStore = require('../stores/TodoStore');
var TodoApp = require('./todo/TodoApp.react');

var UserStore = require('../stores/UserStore');
var UserActions = require('../actions/UserActions');


/**
 * Retrieve the current TODO data from the TodoStore
 */
function getTodoState() {
  return {
    data: [],
    user: UserStore.getUser(),
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete()
  };
}

var Login = React.createClass({
  mixins : [Router.Navigation],
  
  getInitialState: function() {
    return getTodoState();
  },  
  componentDidMount: function() {
    TodoStore.addChangeListener(this._onChange);
    UserStore.addChangeListener(this._onChange);
    
    $.ajax({
      //url: this.props.url,
      url: '/api/auth/users',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('/api/auth/users', status, err.toString());
      }.bind(this)
    });    
  },
  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this._onChange);
    UserStore.removeChangeListener(this._onChange);
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var email = React.findDOMNode(this.refs.email).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();
    if (!email || !password) {
      return;
    }
    UserActions.login(email, password);

    return;
  },  
    /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {
    this.setState(getTodoState());
    console.log('_onChange');
    
    if(this.state.user.isAuthentified === true) {
      setTimeout( ()=>this.transitionTo('chart1'), 2000 );  
    }
    
  },
  render: function() {

    /*var imgUrl = '/dist/logo.png';
    var divStyle = {
      color: 'white',
      backgroundImage: 'url(' + imgUrl + ')',
      WebkitTransition: 'all', // note the capital 'W' here
      msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    };*/

    

    return (
       //<DriveIn show="/dist/frontier.mp4" />
      
      //<div style={divStyle}>
      //<input type="email" id="inputEmail" className="form-control" placeholder="Email address" ref="email" required autofocus />
      
      
      <div>
      user: {this.state.user.username}
      <div className="row" >
      <div className="col-lg-4 col-sm-3"></div>
      <div className="col-lg-4 col-sm-6 jumbotron">
          <form className="form-signin" onSubmit={this.handleSubmit}>
            <h2 className="form-signin-heading">Login</h2>
            <label for="inputEmail" className="sr-only">Email address</label>
            
            <input type="string" id="inputEmail" className="form-control" placeholder="Email address" ref="email" required autofocus />
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" ref="password" required />
            <div class="checkbox">
              <label>
                <input type="checkbox" value="remember-me"> Remember me</input>
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          </form>
        </div>
        <div className="col-lg-4 col-sm-3"></div>
        
        <div className="col-lg-12 col-sm-12">
          { (this.state.user.isAuthentified === false) && (<div className="alert alert-warning" role="alert">{this.state.user.message}</div>)}  
          { (this.state.user.isAuthentified === true) && (<div className="alert alert-success" role="alert">{this.state.user.message}</div>)}  
        </div>
        
        {this.state.allTodos}
        <br/>
        {this.state.areAllComplete}
        <br/>
        <TodoApp />
        </div>
        
        
        </div>
    );
  }
});


module.exports = Login;