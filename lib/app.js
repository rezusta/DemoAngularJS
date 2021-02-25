(function(){
    var app = angular.module("demoAngularJS", ["ngRoute"]);

    app.config(function($routeProvider){
        $routeProvider
            .when("/main", {
                templateUrl: "lib/main.html",
                controller: "ControladorPrincipal"
            })
            .otherwise({redirectTo: "/main"});
    });

}());