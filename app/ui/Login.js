'use strict';

var React = require('react');
var DriveIn = require('react-drive-in');

require('../frontier.mp4');

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
      <div>
        <DriveIn show="/dist/frontier.mp4" />
      <div className="row" >
      <div className="col-lg-4 col-sm-3"></div>
      <div className="col-lg-4 col-sm-6 jumbotron">
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
        </div>
    );
  }
});


module.exports = Login;