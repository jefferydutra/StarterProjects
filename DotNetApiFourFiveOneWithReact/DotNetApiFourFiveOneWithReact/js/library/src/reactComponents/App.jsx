var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;


var Test = React.createClass({
    render: function () {
        return (
            <span>Hello</span>
        );
    }
});


var App = React.createClass({
   render: function (){
       return (
        <div className="container-fluid">
           <div className="row">
               <div className="col-md-12">
			        <Link to="test"></Link>
               </div>
           </div>
        <RouteHandler />
       </div>
       )
   }
});

var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="test" path="test" handler={Test} />
        <DefaultRoute handler={Test}/>
    </Route>
);


window.reactElements = {};
window.reactElements.loadApp = function(domId){
	var container = document.getElementById(domId);
	Router.run(routes, function(Handler){
	   React.render(<Handler />, container);
	});
};