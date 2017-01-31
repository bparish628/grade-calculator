angular.module('gradeCalculator.edit-class', ['ngRoute'])

.config($routeProvider => {
  $routeProvider.when('/edit/:id', {
    template: '<edit-class></edit-class>'
  });
})

.component('editClass', {
  template: `
    <form class="well">
      <div class="alert alert-danger" role="alert" ng-show="$ctrl.message.status">
        {{$ctrl.message.text}}
      </div>
      <h2>Editting <span class="text-primary">{{::$ctrl.class.name}}<span></h2>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Physics 1" ng-model="$ctrl.class.name">
      </div>
      <h4 ng-if="$ctrl.class.grades.length">Grades: </h4>
      <div class="row" ng-repeat="grade in $ctrl.class.grades">
        <div class="form-group col-lg-9 col-sm-7">
          <label for="name" class="control-label">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Assignment 1" ng-model="grade.name">
        </div>
        <div class="form-group col-lg-1 col-sm-2">
          <label for="grade" class="control-label">Grade</label>
          <div class="input-group">
            <input type="text" class="form-control" id="grade" placeholder="40" ng-model="grade.grade" style="min-width: 30px;">
            <span class="input-group-addon">%</span>
          </div>
        </div>
        <div class="form-group col-lg-1 col-sm-2">
          <label for="weight" class="control-label">Weight</label>
          <div class="input-group">
            <input type="text" class="form-control" id="weight" placeholder="50" ng-model="grade.weight" style="min-width: 30px;">
            <span class="input-group-addon">%</span>
          </div>
        </div>
        <div class="col-sm-1">
          <button class="btn btn-danger btn-sm" ng-click="$ctrl.removeGrade($index)" style="margin-top: 37px"><i class="glyphicon glyphicon-minus"></i></button>
        </div>
      </div>
      <div class="form-group text-right">
        <button class="btn btn-info" ng-click="$ctrl.addGrade()"><i class="glyphicon glyphicon-plus"></i> Add Grade</button>
      </div>
      <div class="text-right">
        <button class="btn btn-primary" ng-click="$ctrl.update()">Submit</button>
        <a href="#/list" class="btn btn-default">Back</a>
      </div>
    </form>
  `,
  controller: ['ClassService', '$route', '$location', function (ClassService, $route, $location) {
    this.message = {};
    ClassService.getClass($route.current.params.id).then(returnedClass => {
        this.class = returnedClass;
    });

    this.addGrade = () => {
      this.class.grades.push({
        name: null,
        grade: null,
        weight: null
      });
    };

    this.removeGrade = index => {
      this.class.grades.splice(index, 1);
    };

    this.update = () => {
      ClassService.updateClass(this.class)
        .then(updatedClass => ($location.path('/list')),
        () => (this.message = { status: 'error', text: 'An error occurred.' }));
    }
  }]
});