'use strict';

var React = require('react');

var Login = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    //this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    //this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    //clearInterval(this.interval);
  },
  render: function() {

    return (
      
      
      <div className="row">
      <div className="col-lg-4 col-sm-3"></div>
      <div className="col-lg-4 col-sm-6">
          <form className="form-signin">
            <h2 className="form-signin-heading">Please sign in</h2>
            <label for="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
            <div class="checkbox">
              <label>
                <input type="checkbox" value="remember-me"> Remember me</input>
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          </form>
        </div>
        <div className="col-lg-4 col-sm-3"></div>
        
        </div>
      
      
      
    );
  }
});


module.exports = Login;