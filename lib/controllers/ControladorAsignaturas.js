(function() {
    var app = angular.module("demoAngularJS");
  
    var ControladorAsignaturas = function($scope, servicioAsignaturas, $location, $routeParams) {
        $scope.Titulo = "Gestión de asignaturas";
        
        var onAsignaturas = function(data){
          $scope.asignaturas = data;
        }
        var onAsignaturaCreada = function(data){
          $location.path("/asignaturas");
        }
        var onAsignaturaActualizada = function(data) {
          $scope.mensaje = "La asignatura se ha actualizado correctamente";
        }
        var onAsignaturaEliminada = function(data){
          $scope.mensaje = "La asignatura se ha eliminado correctamente";
          servicioAsignaturas.getAsignaturas().then(onAsignaturas, onError);
        }
        var onAsignaturaDetalle = function(data){
          $scope.ID = data[0].ID;
          $scope.nombre = data[0].nombre;
          $scope.aula = data[0].aula;
          $scope.dia = data[0].dia;
          $scope.hora = data[0].hora;
          $scope.ano = data[0].ano;
        }
        var onError = function(reason){
          $scope.error = "No se ha podido recuperar el listado de asignaturas";
        }
        var onErrorCreacion = function(reason){
          $scope.error = "No se ha podido crear la asignatura";
        }
        var onErrorEliminacion = function(reason){
          $scope.error = "No se ha podido eliminar la asignatura";
        }
  
        if ($routeParams.ID) {
          servicioAsignaturas.getAsignatura($routeParams.ID).then(onAsignaturaDetalle, onError);
        } else {
          servicioAsignaturas.getAsignaturas().then(onAsignaturas, onError);
        }
        
        $scope.navegaPantallaCrearAsignatura = function(){
          $location.path("/asignaturas/nueva");
        }
        $scope.crearAsignatura = function(ID, nombre, aula, dia, hora, ano){
          servicioAsignaturas.createAsignatura(ID, nombre, aula, dia, hora, ano).then(onAsignaturaCreada, onErrorCreacion);
        }
        $scope.actualizarAsignatura = function(ID, nombre, aula, dia, hora, ano){
          servicioAsignaturas.putAsignatura(ID, nombre, aula, dia, hora, ano).then(onAsignaturaActualizada, onErrorCreacion);
        }
        $scope.cancelar = function(){
          $location.path("/asignaturas");
        }
        $scope.eliminarAsignatura = function(ID){
          servicioAsignaturas.deleteAsignatura(ID).then(onAsignaturaEliminada, onErrorEliminacion);
        }
        $scope.detalleAsignatura = function(ID){
          $location.path("/asignaturas/" + ID);
        }
  
    };
  
    app.controller("ControladorAsignaturas", ControladorAsignaturas);
  }());
  