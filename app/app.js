import React from "react";
import Greeting from "./greeting";

import 'bootstrap/dist/css/bootstrap.css';

React.render(
  <Greeting name="World"/>,
  document.getElementById('app')
);