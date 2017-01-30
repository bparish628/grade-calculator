angular.module('gradeCalculator', [
  'ngRoute',
  'gradeCalculator.create-class',
  'gradeCalculator.list-classes',
  'gradeCalculator.ClassService'
])
.config(($locationProvider, $routeProvider) => {
  $locationProvider.hashPrefix('');

  $routeProvider.otherwise({redirectTo: '/list'});
});
