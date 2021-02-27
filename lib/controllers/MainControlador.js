(function() {
    var app = angular.module("demoAngularJS");
  
    var MainControlador = function($scope, $location) {
       
        $scope.navegarAAlumnos = function() {
            $location.path("/alumnos");
        };

        $scope.navegarAAsignaturas = function() {
            $location.path("/asignaturas");
        };
        
    };
  
    app.controller("MainControlador", MainControlador);
  }());  