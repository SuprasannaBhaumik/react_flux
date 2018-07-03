var React = require('react');
var Home = require('./homePage');
var Header = require('./header');
var RouteHandler = require('react-router').RouteHandler;

var CreateReactClass = require('create-react-class');

var App = CreateReactClass({
	render: function(){
		return(
			<div>
				<Header />
				<RouteHandler />
			</div>
		);
	}
});
	
module.exports = App;