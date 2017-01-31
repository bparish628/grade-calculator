angular.module('gradeCalculator.list-classes', ['ngRoute'])

.config($routeProvider => {
  $routeProvider.when('/list', {
    template: '<list-classes></list-classes>'
  });
})

.component('listClasses', {
  template: `
    <h3 style="margin-top: 0;">
      Classes
      <a href="#/create" class="btn btn-primary pull-right">
        Create a class
      </a>
    </h3>
      
      <table class="table table-bordered table-hover">
        <tr>
          <th width="70%">Name</th>
          <th class="text-center"># of grades</th>
          <th class="text-center">Current grade</th>
          <th style="min-width: 123px;" width="10%" class="text-center">Options</th>
        </tr>
        <tbody>
          <tr ng-repeat="class in $ctrl.classes | orderBy:'name'">
            <td>{{class.name}}</td>
            <td class="text-center">{{class.grades.length}}</td>
            <td class="text-center">{{class.currentGrade}}%</td>
            <td class="text-center">
              <button class="btn btn-default btn-sm">
                <i class="glyphicon glyphicon-eye-open"></i>
              </button>
              <a href="#/edit/{{class.id}}" class="btn btn-info btn-sm">
                <i class="glyphicon glyphicon-pencil"></i>
              </a>
              <button ng-click="$ctrl.removeClass(class.id)" class="btn btn-danger btn-sm" style="display: inline-block; margin: auto;">
                <i class="glyphicon glyphicon-remove"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
  `,
  controller: ['ClassService', function(ClassService) {
    this.classes = [];
    ClassService.listClasses().then(classes => {
      this.classes = classes;
    });

    this.removeClass = id => {
      ClassService.deleteClass(id).then(deletedClass => {
        const index = this.classes.findIndex(obj => (obj.id === deletedClass.id));
        this.classes.splice(index, 1);
      });
    };
  }]
});