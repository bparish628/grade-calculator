angular.module('gradeCalculator.ClassService', [])
  .service('ClassService', ($http, $q) => {
    return {
      createClass(name) {
        var defer = $q.defer();
        $http.post('/class', name).then(response =>  defer.resolve(response), 
          error => (defer.reject(error)));
        return defer.promise;
      },

      listClasses(name) {
        var defer = $q.defer();
        $http.get('/class').then(response =>  defer.resolve(response.data), 
          error => (defer.reject(error)));
        return defer.promise;
      },
      
      updateClasses(info) {
        var defer = $q.defer();
        $http.put('/class', info).then(response =>  defer.resolve(response), 
          error => (defer.reject(error)));
        return defer.promise;
      },

      deleteClasses(id) {
        var defer = $q.defer();
        $http.delete('/class/destroy', id).then(response =>  defer.resolve(response), 
          error => (defer.reject(error)));
        return defer.promise;
      }
    };
  });