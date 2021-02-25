(function() {
    var app = angular.module("demoAngularJS");
  
    var ControladorPrincipal = function($scope, servicioAlumnos) {
        $scope.Titulo = "Listado de alumnos";
        
        var onAlumnos = function(data){
          $scope.alumnos = data;
        }
        var onError = function(reason){
          $scope.error = "No se ha podido recuperar el listado de alumnos";
        }
  
        servicioAlumnos.getAlumnos().then(onAlumnos, onError);
  
    };
  
    app.controller("ControladorPrincipal", ControladorPrincipal);
  }());
  