/*import React from "react";
import Greeting from "./greeting";

import 'bootstrap/dist/css/bootstrap.css';

React.render(
  <Greeting name="World"/>,
  document.getElementById('app')
);
*/


var React = window.React = require('react'),
    Timer = require("./ui/Timer"),
    mountNode = document.getElementById("app"),
    Chart1 = require("./ui/Chart1");

import 'bootstrap/dist/css/bootstrap.css';
import 'url?limit=10000!./logo.png';


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


var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText) {
      return <li>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
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