var myApp = angular.module('myApp', [
  'ngRoute',
  'artistControllers'
]);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when('/list',{
    templateUrl: '/views/partials/list.html',
    controller: 'ListController'
  }).
  when('/details/:itemId', {
    templateUrl: '/views/partials/details.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);
