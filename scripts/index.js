/*
 * Webpack inclusions.
 */
require("../styles/style.less");

/*
 * Application.
 */
import "babel/polyfill";
import React, { PropTypes } from "react";
import { createHashHistory } from 'history';
import { Router, Route, Link, IndexRoute } from 'react-router'

import Builder from "./components/Builder";
import Redirect from "./components/Redirect";
// import Complete from "./components/Complete";
// import Fill from "./components/Fill";


const history = createHashHistory({queryKey: false});

React.render((
  <Router history={history}>
    <Route path="/" component={Redirect} />
    <Route path="/:id" component={Builder} />
  </Router>
), document.getElementById("app"))
