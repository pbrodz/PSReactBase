"use strict";

var React = require('react');	//Import the React - using the Common JS pattern

var Home = React.createClass({
	render: function(){
		return (
			<div className="jumbotron">
				<h1>Pluralsight Administration</h1>
				<p>React, React Router and Flux for ultra-responsive web apps</p>
			</div>
		);
	}
});

module.exports = Home;