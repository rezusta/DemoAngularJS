// Add your code here
(function() {
    var app = angular.module("demoAngularJS", []);
  
    var ControladorPrincipal = function($scope, $http) {
        $scope.Titulo = "Listado de alumnos";
        
        var onAlumnos = function(response){
          $scope.alumnos = response.data;
        }
  
        var onError = function(reason){
          $scope.error = "No se ha podido recuperar el listado de alumnos";
        }
  
        $http.get("https://demo-backend-tfm.herokuapp.com/api/alumnos")
          .then(onAlumnos, onError);
  
    };
  
    app.controller("ControladorPrincipal", ["$scope", "$http", ControladorPrincipal]);
  }());
  