(function() {
  var app = angular.module("demoAngularJS");

  var ControladorAlumnos = function($scope, servicioAlumnos, servicioAsignaturas, $location, $routeParams) {
      $scope.Titulo = "Gestión de alumnos";
      
      var onAlumnos = function(data){
        $scope.alumnos = data;
      }
      var onAsignaturasDia = function(data){
        $scope.asignaturasDia = data;
      }
      var onAsignaturasSemana = function(data){
        $scope.asignaturasSemana = data;
      }
      var onAsignaturas = function(data){
        $scope.asignaturas = data;
      }
      var onAlumnoCreado = function(data){
        $location.path("/alumnos");
      }
      var onAlumnoActualizado = function(data) {
        $scope.mensaje = "El usuario se ha actualizado correctamente";
      }
      var onAlumnoEliminado = function(data){
        $scope.mensaje = "El usuario se ha eliminado correctamente";
        servicioAlumnos.getAlumnos().then(onAlumnos, onError);
      }
      var onAlumnoAsignaturaAdded = function(data){
        $scope.mensaje = "La asignatura se ha añadido correctamente";
        var d = new Date();
        var dia = d.getDay() == 0 ? 7 : d.getDay();
        servicioAlumnos.getAsignaturasAlumnoDia($routeParams.NIA, dia).then(onAsignaturasDia, onError);
        servicioAlumnos.getAsignaturasAlumno($routeParams.NIA).then(onAsignaturasSemana, onError);
      }

      var onAlumnoAsignaturaDeleted = function(data){
        $scope.mensaje = "La asignatura se ha eliminado correctamente";
        var d = new Date();
        var dia = d.getDay() == 0 ? 7 : d.getDay();
        servicioAlumnos.getAsignaturasAlumnoDia($routeParams.NIA, dia).then(onAsignaturasDia, onError);
        servicioAlumnos.getAsignaturasAlumno($routeParams.NIA).then(onAsignaturasSemana, onError);
      }

      var onAlumnoDetalle = function(data){
        $scope.NIA = data[0].NIA;
        $scope.nombre = data[0].nombre;
        $scope.apellido = data[0].apellido;
      }
      var onError = function(reason){
        $scope.error = "No se ha podido recuperar el listado de alumnos";
      }
      var onErrorAdd = function(reason){
        $scope.error = "No se ha podido añadir la asignatura";
      } 
      var onErrorDel = function(reason){
        $scope.error = "No se ha podido eliminar la asignatura";
      } 
      var onErrorCreacion = function(reason){
        $scope.error = "No se ha podido crear el alumno";
      }
      var onErrorEliminacion = function(reason){
        $scope.error = "No se ha podido eliminar el alumno";
      }

      if ($routeParams.NIA) {
        servicioAlumnos.getAlumno($routeParams.NIA).then(onAlumnoDetalle, onError);
        var d = new Date();
        var dia = d.getDay() == 0 ? 7 : d.getDay();
        servicioAlumnos.getAsignaturasAlumnoDia($routeParams.NIA, dia).then(onAsignaturasDia, onError);
        servicioAlumnos.getAsignaturasAlumno($routeParams.NIA).then(onAsignaturasSemana, onError);
        servicioAsignaturas.getAsignaturas().then(onAsignaturas, onError);
      } else {
        servicioAlumnos.getAlumnos().then(onAlumnos, onError);
      }
      
      $scope.navegaPantallaCrearAlumno = function(){
        $location.path("/alumnos/nuevo");
      }
      $scope.crearAlumno = function(NIA, nombre, apellido){
        servicioAlumnos.createAlumno(NIA, nombre, apellido).then(onAlumnoCreado, onErrorCreacion);
      }
      $scope.actualizarAlumno = function(NIA, nombre, apellido){
        servicioAlumnos.putAlumno(NIA, nombre, apellido).then(onAlumnoActualizado, onErrorCreacion);
      }
      $scope.cancelar = function(){
        $location.path("/alumnos");
      }
      $scope.eliminarAlumno = function(NIA){
        servicioAlumnos.deleteAlumno(NIA).then(onAlumnoEliminado, onErrorEliminacion);
      }
      $scope.detalleAlumno = function(NIA){
        $location.path("/alumnos/" + NIA);
      }
      $scope.addUsuarioAsignatura = function(NIA, ID) {
        servicioAlumnos.addAlumnoAsignatura(NIA, ID).then(onAlumnoAsignaturaAdded, onErrorAdd);
      }
      $scope.eliminarAlumnoAsignatura = function(NIA, ID) {
        servicioAlumnos.delAlumnoAsignatura(NIA, ID).then(onAlumnoAsignaturaDeleted, onErrorDel);
      }

  };

  app.controller("ControladorAlumnos", ControladorAlumnos);
}());
