(function() {
  var app = angular.module("demoAngularJS");

  var ControladorAlumnos = function($scope, ServicioAlumnos, $location) {
      $scope.Titulo = "Gestión de alumnos";
      
      var onAlumnos = function(data){
        $scope.alumnos = data;
      }
      var onError = function(reason){
        $scope.error = "No se ha podido recuperar el listado de alumnos";
      }

      ServicioAlumnos.getAlumnos().then(onAlumnos, onError);

      $scope.crearAlumno = function(){
        $location.path("/alumnos/nuevo");
      }

  };

  app.controller("ControladorAlumnos", ControladorAlumnos);
}());
