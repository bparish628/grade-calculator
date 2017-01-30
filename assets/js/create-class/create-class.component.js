angular.module('gradeCalculator.create-class', ['ngRoute'])

.config($routeProvider => {
  $routeProvider.when('/create', {
    template: '<create-class></create-class>'
  });
})

.component('createClass', {
  template: `
    <input type="text" ng-model="$ctrl.name" />
    <button ng-click="$ctrl.create()">Submit</button>
  `,
  controller: ['ClassService', function (ClassService) {
    this.name = 'Class 1';
    this.create = () => {
      ClassService.createClass({ name: this.name });
    }
  }]
});