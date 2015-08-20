'use strict';

var React = require('react');

var NavBar = React.createClass({
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
    // Ugly
    let className1 = '', className2 = '';
    if(this.props.active === 'chart1') {
      className1 = 'active';
    } else if(this.props.active === 'timer') {
      className2 = 'active';
    }
    
    return (
      <div className="header">
      
      
        <nav className="nav navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container-fluid">
            <div className="nav-header">
              <button className="navbar-toggle collapsed"
                      type="button" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
               </button>
              <a className="navbar-brand" href='/'>
                <img src="/dist/logo.png" className="img-responsive"  height="64" width="64" alt=""/>
              </a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className={className1}><a href="/#/chart1">chart1</a></li>
                <li className={className2}><a href="/#/timer">timer</a></li> 
              </ul>
              <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a id="user" href="/account"> Account</a>
                  </li>
                  <li>
                    <a href="/logout">Logout</a>
                  </li>
                  <li>
                    <a href="/#/login"> Log In </a>
                  </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    );
  }
});


module.exports = NavBar;