angular.module('gradeCalculator.edit-class', ['ngRoute'])

.config($routeProvider => {
  $routeProvider.when('/edit/:id', {
    template: '<edit-class></edit-class>'
  });
})

.component('editClass', {
  template: `
    <form>
      <div class="alert alert-danger" role="alert" ng-show="$ctrl.message.status">
        {{$ctrl.message.text}}
      </div>
      <h3>Edit <span class="text-primary">{{::$ctrl.class.name}}</span></h3>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Physics 1" ng-model="$ctrl.class.name">
      </div>
      <h4 style="margin-top: 25px;">
        Grades: 
        <button class="btn btn-info btn-sm pull-right" ng-click="$ctrl.addGrade()"><i class="glyphicon glyphicon-plus"></i> Add Grade</button>
      </h4>
      <table class="table table-bordered table-hover">
        <tr>
          <th>Name</th>
          <th width="20px">Grade(%)</th>
          <th width="20px">Weight(%)</th>
          <th width="30px">Delete</th>
        </tr>
        <tbody>
          <tr ng-repeat="grade in $ctrl.class.grades">
            <td><input type="text" class="form-control" placeholder="Assignment 1" ng-model="grade.name"></td>
            <td><input type="text" class="form-control" placeholder="40" ng-model="grade.grade"></td>
            <td><input type="text" class="form-control" placeholder="50" ng-model="grade.weight"></td>
            <td class="text-center"><button class="btn btn-danger btn-sm" ng-click="$ctrl.removeGrade($index)"><i class="glyphicon glyphicon-minus"></i></button></td>
          </tr>
          <tr ng-if="!$ctrl.class.grades.length" class="text-center">
            <td colspan="100%">There are no grades for this class.</td>
          </tr>
        </tbody>
      </table>
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