

var React = require('react');
var CreateReactClass = require('create-react-class');
var Link = require('react-router').Link;

var Header = CreateReactClass({

	render : function(){
		return (
			<div className="container">
				<Link to="authors">Authors</Link>
				<Link to="home">Home</Link>
				<Link to="contact">Contact Us</Link>
			</div>	
		);	
	}

});

module.exports = Header;
