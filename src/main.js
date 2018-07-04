

$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app');


var Router = require('react-router-dom');
var BrowserRouter = Router.BrowserRouter;

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'));



