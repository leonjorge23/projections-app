var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Month = require('../components/Month');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
    <Route path="/" component={Main}>
        <Route path="month/:name" component={Month} />
        <IndexRoute component={Home} />
    </Route>
);