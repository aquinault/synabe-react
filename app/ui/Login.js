'use strict';

var React = require('react');
var DriveIn = require('react-drive-in');

var $ = require('jquery');
//require('../frontier.mp4');
var Router = require('react-router');

var Login = React.createClass({
  mixins : [Router.Navigation],
  
  getInitialState: function() {
    return {data: []};
  },  
  componentDidMount: function() {
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
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var email = React.findDOMNode(this.refs.email).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();
    if (!email || !password) {
      return;
    }
    let user = {
      username: email,
      password: password
    };
    console.log('user : ' + user);

    $.ajax({
      url: '/api/auth/login/',
      dataType: 'json',
      //contentType: 'application/json',
      type: 'POST',
      data: user,
      success: function(data) {
        this.setState({data: {responseJSON : data}});
        
        console.log('user auth OK');
        console.log(data);
        
        setTimeout( ()=>this.transitionTo('chart1'), 2000 );
        
        //this.transitionTo('chart1');

      }.bind(this),
      error: function(xhr, status, err) {
        //this.setState({data: {loginFailed :true, responseJSON : xhr.responseJSON}});
        this.setState({data: {responseJSON : xhr.responseJSON}});
        console.log('/api/auth/login/', status, err.toString());
        console.log(xhr);
      }.bind(this)
    });
  
    return;
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
          {this.state.data.responseJSON && this.state.data.responseJSON.error && (<div className="alert alert-warning" role="alert">{this.state.data.responseJSON.error.message}</div>)}  
          {this.state.data.responseJSON && this.state.data.responseJSON.data && (<div className="alert alert-success" role="alert">{this.state.data.responseJSON.data.message}</div>)}  
        </div>
        
        
        </div>
        
        
        </div>
    );
  }
});


module.exports = Login;