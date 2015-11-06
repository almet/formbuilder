import Auth from "./auth";
import Controller from "./controller";
import Store from "./store";
import { EventEmitter } from "events";


const events = new EventEmitter();
const auth = new Auth(events, window.location);
const store = new Store("items", events);
const controller = new Controller({auth, store}, events);

module.exports = controller;
