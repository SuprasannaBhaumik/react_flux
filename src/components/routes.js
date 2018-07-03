"use strict";

var React = require('react');
var Router = require('react-router');

var BrowserRouter = Router.BrowserRouter;

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var routes = (

	<BrowserRouter name="app" path="/" handler={require('./component/app')}>
		<DefaultRoute handler={require('./homePage')} />
		<Route name="about" handler={require('./aboutPage')} />
		<Route name="authors" handler={require('./authorPage')} />
	</BrowserRouter>
);

module.exports = routes;