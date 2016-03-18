var artistControllers = angular.module('artistControllers', []);

artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('controllers/data.json').success(function(data) {
    $scope.artists = data;
    $scope.artistOrder = 'name';
  });
}]);
