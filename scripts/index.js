/*
 * Webpack inclusions.
 */
require("../styles/style.less");

/*
 * Application.
 */
import "babel/polyfill";
import { EventEmitter } from "events";
import React from "react";
import { createHashHistory } from 'history';
import { Router, Route, Link, IndexRoute } from 'react-router'

import Builder from "./components/Builder";
//import Redirect from "./components/Redirect";
// import Complete from "./components/Complete";
// import Fill from "./components/Fill";

import Auth from "./auth";
import Controller from "./controller";
import Store from "./store";


const events = new EventEmitter();
const auth = new Auth(events, window.location);
const store = new Store("items", events);
const controller = new Controller({auth, store}, events);

const history = createHashHistory({queryKey: false});

React.render((
  <Router history={history} controller={controller}>
    <Route path="/">
      <IndexRoute onEnter={() => { history.pushState(null, '/1234');} } />
    </Route>
    <Route path="/:id" component={Builder} />
  </Router>
), document.getElementById("app"))
