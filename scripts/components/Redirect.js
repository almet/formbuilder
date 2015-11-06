import React, { PropTypes } from "react";
import {History} from "react-router";

var Builder = React.createClass({
  mixins: [History],
  componentDidMount: function() {
    this.history.pushState(null, '/1234');
  },
  render: function() { return <div></div>; }
});

module.exports = Builder;
