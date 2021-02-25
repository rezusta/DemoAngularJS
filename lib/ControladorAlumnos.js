(function() {
  var app = angular.module("demoAngularJS");

  var ControladorAlumnos = function($scope, servicioAlumnos) {
      $scope.Titulo = "Gestión de alumnos";
      
      var onAlumnos = function(data){
        $scope.alumnos = data;
      }
      var onError = function(reason){
        $scope.error = "No se ha podido recuperar el listado de alumnos";
      }

      servicioAlumnos.getAlumnos().then(onAlumnos, onError);

  };

  app.controller("ControladorAlumnos", ControladorAlumnos);
}());
