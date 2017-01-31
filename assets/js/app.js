angular.module('gradeCalculator', [
  'ngRoute',
  'gradeCalculator.navigation',
  'gradeCalculator.create-class',
  'gradeCalculator.edit-class',
  'gradeCalculator.list-classes',
  'gradeCalculator.ClassService'
])
.config(['$locationProvider', '$routeProvider', ($locationProvider, $routeProvider) => {
  $locationProvider.hashPrefix('');
  $routeProvider.otherwise({redirectTo: '/list'});
}]);
