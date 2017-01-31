angular.module('gradeCalculator.navigation', ['ngRoute'])

.component('navigation', {
  template: `
    <div class="row">
      <div class="col-sm-8 col-sm-offset-2">
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">Grade Calculator</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  `,
  controller: ['$location', function($location) {
    this.isActive = route => ($location.path().indexOf(route) === 0);
  }]
});