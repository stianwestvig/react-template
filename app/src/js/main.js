var React = require('react');
var view = require('./view.jsx');
var hello = require('./hello.jsx');

React.render(view(), document.getElementById('view'));
React.render(hello(), document.getElementById('content'));

