var React = window.React = require('react'),
    Timer = require("./ui/Timer"),
    mountNode = document.getElementById("app"),
    Chart1 = require("./ui/Chart1");

import 'bootstrap/dist/css/bootstrap.css';


var Router = require('react-router');
var Route = Router.Route;

// declare our routes and their hierarchy
var routes = (
  <Route handler={TodoApp}>
    <Route path="chart1" handler={Chart1}/>
    <Route path="timer" handler={Timer}/>
    
  </Route>
);

var RouteHandler = Router.RouteHandler;


var TodoApp = React.createClass({
  render: function() {
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }
});



Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, mountNode);
});