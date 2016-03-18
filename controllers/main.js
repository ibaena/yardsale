var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope){
  $scope.author = {
    'name': 'Ivan Baena',
    'title': 'Student',
    'company': 'Rutger'
  };
});
