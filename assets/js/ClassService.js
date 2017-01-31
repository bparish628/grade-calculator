angular.module('gradeCalculator.ClassService', [])
  .service('ClassService', ['$http', '$q', ($http, $q) => {
    return {
      createClass(name) {
        var defer = $q.defer();
        $http.post('/class', name).then(response =>  defer.resolve(response.data), 
          error => (defer.reject(error)));
        return defer.promise;
      },

      listClasses(name) {
        var defer = $q.defer();
        $http.get('/class').then(response =>  defer.resolve(response.data), 
          error => (defer.reject(error)));
        return defer.promise;
      },

      getClass(id) {
        var defer = $q.defer();
        $http.get(`/class/${id}`).then(response =>  defer.resolve(response.data), 
          error => (defer.reject(error)));
        return defer.promise;
      },
      
      updateClass(info) {
        var defer = $q.defer();
        $http.put(`/class/${info.id}`, info).then(response =>  defer.resolve(response.data), 
          error => (defer.reject(error)));
        return defer.promise;
      },

      deleteClass(id) {
        var defer = $q.defer();
        $http.delete(`/class/destroy/${id}`).then(response =>  defer.resolve(response.data), 
          error => (defer.reject(error)));
        return defer.promise;
      }
    };
  }]);