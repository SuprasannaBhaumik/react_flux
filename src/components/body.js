var React = require('react');
var CreateReactClass = require('create-react-class');

var ReactRouter = require('react-router');
var Switch = ReactRouter.Switch;
var Route = ReactRouter.Route;

var Authors = require('./authorPage');
var Home = require('./homePage');
var About = require('./aboutPage');

var Body = CreateReactClass({
	render : function(){
		return(
			<main>
				<Switch>
					<Route path="/"  builder={Home} />
					<Route name="authors" builder={Authors} />
					<Route name="about" builder={About} />
				</Switch>
			</main>
		);
	}
});

module.exports = Body;