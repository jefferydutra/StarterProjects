var React = require('react');
var Router = require('react-router');
var i18n = require('i18next-client');

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

function getTestLabelObject(){
    var app = i18n.t("app", { returnObjectTrees: true });
    return {
        title: app.name,
        subTitle: app.subTitle
    }
}

var App = React.createClass({
    render: function (){
        var appLabel = getTestLabelObject();
        return (
            <div className="container-fluid">
               <div className="row">
                   <div className="col-md-12">
                   <h2>{appLabel.title}</h2>
                   <h4>{appLabel.subTitle}</h4>
                        <Link to="test">Link to Test</Link>
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
    i18n.init(function() {
        var container = document.getElementById(domId);
        Router.run(routes, function(Handler){
            React.render(<Handler />, container);
        });

    });

};