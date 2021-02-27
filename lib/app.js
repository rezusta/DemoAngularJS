(function(){
    var app = angular.module("demoAngularJS", ["ngRoute"]);

    app.config(function($routeProvider){
        $routeProvider
            .when("/alumnos", {
                templateUrl: "lib/views/listadoAlumnos.html",
                controller: "ControladorAlumnos"
            })
            .when("/alumnos/nuevo", {
                templateUrl: "lib/views/crearAlumno.html",
                controller: "ControladorAlumnos"
            })
            .when("/asignaturas", {
                templateUrl: "lib/views/listadoAlumnos.html",
                controller: "ControladorAlumnos"
            })
            .otherwise({redirectTo: "/"});
    });

}());