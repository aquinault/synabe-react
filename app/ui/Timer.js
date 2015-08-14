'use strict';

var React = require('react');
import NavBar from './NavBar';

var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      
      <div>
        <NavBar active="timer"/>
        <br/><br/><br/><br/>
        Seconds Elapsed: {this.state.secondsElapsed}
      </div>
    );
  }
});


module.exports = Timer;