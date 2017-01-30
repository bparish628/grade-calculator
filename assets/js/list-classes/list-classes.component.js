angular.module('gradeCalculator.list-classes', ['ngRoute'])

.config($routeProvider => {
  $routeProvider.when('/list', {
    template: '<list-classes></list-classes>'
  });
})

.component('listClasses', {
  template: `
    <div ng-repeat="class in $ctrl.classes">
      {{class.name}}
    </div>
  `,
  controller: ['ClassService', function(ClassService) {
    this.classes = [];
    ClassService.listClasses().then(classes => {
      this.classes = classes;
    });
  }]
});