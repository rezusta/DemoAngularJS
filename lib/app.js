(function(){
    var app = angular.module("demoAngularJS", ["ngMaterial", "ngRoute"]);

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
            .when("/alumnos/:NIA", {
                templateUrl: "lib/views/detalleAlumno.html",
                controller: "ControladorAlumnos"
            })
            .when("/asignaturas", {
                templateUrl: "lib/views/listadoAsignaturas.html",
                controller: "ControladorAsignaturas"
            })
            .when("/asignaturas/nueva", {
                templateUrl: "lib/views/crearAsignatura.html",
                controller: "ControladorAsignaturas"
            })
            .when("/asignaturas/:ID", {
                templateUrl: "lib/views/detalleAsignatura.html",
                controller: "ControladorAsignaturas"
            })
            .otherwise({redirectTo: "/"});
    });

}());