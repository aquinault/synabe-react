var React = window.React = require('react'),
    Timer = require("./components/Timer"),
    mountNode = document.getElementById("app"),
    Login = require("./components/Login"),
    Chart1 = require("./components/Chart1");
    
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootswatch/paper/bootstrap.css';
import './bootswatch.less';

var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

// declare our routes and their hierarchy
var routes = (
  <Route handler={TodoApp}>
    <Route path="chart1" name="chart1" handler={Chart1}/>
    <Route path="timer" handler={Timer}/>
    <Route path="login" handler={Login}/>
    <DefaultRoute handler={Login} />
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