angular.module('Test03', [])
.controller('Test03Ctrl', function($scope, $http){
  $http.get('/data.json')
  .success(function(res) {
    $scope.data = res;
  });
  $scope.getClass = function(string){
    switch (string) {
    case "Yes":
      return "green";
    case "Partial":
      return "orange";
    default:
      return "red";
    }
  };
});
