(function(){
    var app = angular.module("demoAngularJS", ["ngRoute"]);

    app.config(function($routeProvider){
        $routeProvider
            .when("/", {
                templateUrl: "lib/main.html",
                controller: "ControladorAlumnos"
            })
            .otherwise({redirectTo: "/"});
    });

}());