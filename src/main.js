

$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app');
var routes = require('./components/routes');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;


ReactDOM.render(<App/>, document.getElementById('app'));

