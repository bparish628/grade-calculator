angular.module('gradeCalculator.create-class', ['ngRoute'])

.config($routeProvider => {
  $routeProvider.when('/create', {
    template: '<create-class></create-class>'
  });
})

.component('createClass', {
  template: `
    <form class="well">
      <div ng-class="$ctrl.message.status === 'success' ? 'alert-success' : 'alert-danger'" class="alert" role="alert" ng-show="$ctrl.message.status">
        {{$ctrl.message.text}}
      </div>
      <h2>Create a class</h2>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Physics 1" ng-model="$ctrl.name">
      </div>
      <div class="text-right">
        <button class="btn btn-primary" ng-click="$ctrl.create()">Submit</button>
        <a href="#/list" class="btn btn-default">Back</a>
      </div>
    </form>
  `,
  controller: ['ClassService', function (ClassService) {
    this.message = {};
    this.create = () => {
      ClassService.createClass({ name: this.name })
        .then(newClass => {
          this.message = { status: 'success', text: `${newClass.name} was successfully added.` };
          this.name = '';
        },
        () => (this.message = { status: 'error', text: 'An error occurred.' }));
    }
  }]
});