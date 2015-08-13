var React, Chart1;

React = require("react");
import Chart from 'chart.js/Chart.js';

Chart1 = React.createClass({
  getInitialState: function() {
    return {
      width : 400
    };
  },
  componentDidMount: function() {
    //this.interval = setInterval(this.tick, 1000);
    let width = React.findDOMNode(this).offsetWidth;
    this.setState({width: width});
    
    console.log(width);
    
    this.data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
  };
    
    
    // Get the context of the canvas element we want to select
    this.ctx = document.getElementById("myChart").getContext("2d");
    this.myLineChart = new Chart(this.ctx).Line(this.data/*, options*/);
  },
  componentWillUnmount: function() {
    //clearInterval(this.interval);
  },
  render: function() {
    
    return (
      <div>
        
        <canvas id="myChart" width="600" height="400"></canvas>
      </div>
    );
  }
});

module.exports = Chart1;
