(function(){
    var app = angular.module("demoAngularJS", ["ngRoute"]);

    app.config(function($routeProvider){
        $routeProvider
            .when("/alumnos", {
                templateUrl: "lib/vistas/listadoAlumnos.html",
                controller: "ControladorAlumnos"
            })
            .when("/alumnos/nuevo", {
                templateUrl: "lib/vistas/crearAlumno.html",
                controller: "ControladorAlumnos"
            })
            .when("/asignaturas", {
                templateUrl: "lib/vistas/listadoAlumnos.html",
                controller: "ControladorAlumnos"
            })
            .otherwise({redirectTo: "/"});
    });

}());