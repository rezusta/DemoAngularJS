(function(){

    var app = angular.module("demoAngularJS");

    var ServicioAlumnos = function($http) {

        var ApiURL = "https://demo-backend-tfm.herokuapp.com/api";

        var getAlumno = function(NIA) {
            return $http.get(ApiURL + "/alumno/" + NIA)
                .then(function(response){
                    return response.data;
                });
        };

        var getAlumnos = function() {
            return $http.get(ApiURL + "/alumnos")
                .then(function(response){
                    return response.data;
                });
        };

        var createAlumno = function(NIA, nombre, apellido) {
            var data = {NIA : NIA, nombre : nombre, apellido : apellido};
            return $http({
                url: ApiURL + "/alumno",
                method: "POST",
                params: data
              }).then(function(response){
                return response.data;
            });
        };

        var deleteAlumno = function(NIA) {
            return $http.delete(ApiURL + "/alumno/" + NIA)
                .then(function(response){
                    return response.data;
                });
        };

        var putAlumno = function(NIA, nombre, apellido) {
            var data = {NIA : NIA, nombre : nombre, apellido : apellido};
            return $http({
                url: ApiURL + "/alumno",
                method: "PUT",
                params: data
              }).then(function(response){
                return response.data;
            });
        };

        return {
            getAlumno: getAlumno,
            getAlumnos: getAlumnos,
            createAlumno: createAlumno,
            deleteAlumno: deleteAlumno,
            putAlumno: putAlumno
        };
    };

    app.factory("ServicioAlumnos", ServicioAlumnos);

})();