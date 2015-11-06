/*
 * Webpack inclusions.
 */
require("../styles/style.less");
require("bootstrap/less/bootstrap.less");

/*
 * Application.
 */
import "babel/polyfill";
import React, { PropTypes } from "react";
import {render} from "react-dom";

import { createHashHistory } from 'history';
import { Router, Route, Link, IndexRoute } from 'react-router'

import Builder from "./components/Builder";
import Welcome from "./components/Welcome";
// import Complete from "./components/Complete";
// import Fill from "./components/Fill";


const history = createHashHistory({queryKey: false});

render((
  <Router history={history}>
    <Route path="/" component={Welcome} />
    <Route path="/:id" component={Builder} />
  </Router>
), document.getElementById("app"))
