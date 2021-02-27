(function() {
  var app = angular.module("demoAngularJS");

  var ControladorAlumnos = function($scope, servicioAlumnos, $location) {
      $scope.Titulo = "Gestión de alumnos";
      
      var onAlumnos = function(data){
        $scope.alumnos = data;
      }
      var onAlumnoCreado = function(data){
        $scope.mensajeCreacion = "El usuario se ha creado correctamente";
      }
      var onError = function(reason){
        $scope.error = "No se ha podido recuperar el listado de alumnos";
      }
      var onErrorCreacion = function(reason){
        $scope.errorCreacion = "No se ha podido crear el alumno";
      }

      servicioAlumnos.getAlumnos().then(onAlumnos, onError);

      $scope.navegaPantallaCrearAlumno = function(){
        $location.path("/alumnos/nuevo");
      }
      
      $scope.crearAlumno = function(NIA, nombre, apellido){
        servicioAlumnos.createAlumno(NIA, nombre, apellido).then(onAlumnoCreado, onErrorCreacion);
      }
      $scope.cancelarCreacion = function(){
        $location.path("/alumnos");
      }

  };

  app.controller("ControladorAlumnos", ControladorAlumnos);
}());
