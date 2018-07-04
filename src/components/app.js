var React = require('react');

var Header = require('./header');
var Body = require('./body');

var CreateReactClass = require('create-react-class');

var App = CreateReactClass({
	render: function(){
		return(
			<div>
				<Header />
				<Body/>
			</div>
		);
	}
});
	
module.exports = App;