// angular.module('shortly.services', [])
//   .factory('Pics', function ($http) {
//     var addOne = function(pic) {
//       return $http({
//         method: 'POST',
//         url: '/pics',
//         data: pic
//       }).then(function (resp) {
//         return resp.data;
//       })
//       .catch(function (err) {
//         return err;
//       });
//     };

//     return {
//       addOne: addOne
//     };
//   });