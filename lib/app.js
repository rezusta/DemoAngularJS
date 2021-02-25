(function(){
    var app = angular.module("demoAngularJS", ["ngRoute"]);

    app.config(function($routeProvider){
        $routeProvider
            .when("/main", {
                templateUrl: "main.html",
                controller: "ControladorPrincipal"
            })
            .otherwise({redirectTo: "/main"});
    });

}());