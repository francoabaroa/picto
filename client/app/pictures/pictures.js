angular.module('picto', [])
  .factory('Pics', function ($http) {
    return {
      addOne: function (pic) {
        console.log('in add one!!');
        return $http({
          method: 'POST',
          url: '/pics',
          data: {name: pic.name, url: pic.url, rating: pic.rating}
        }).then(function (resp) {
          console.log('pictures.js', resp.data);
          return resp.data;
        })
        .catch(function (err) {
          return err;
        });
      },
      getAll: function () {
        return $http({
          method: 'GET',
          url: '/pics'
        })
        .then(function (resp) {
          console.log(resp.data);
          return resp.data;
        });
      }
    };
  })
  .controller('pictureController', function ($scope, Pics) {
    $scope.indices = {Paco: 0, Flaco: 1, Taco: 2, Caco: 3};
    $scope.obj = [];
    $scope.names = ['Paco', 'Flaco', 'Taco', 'Caco'];
    $scope.rating = [1, 2, 3, 4, 5];
    $scope.currInd = 3;

    $scope.selectedItemChanged = function () {
      $scope.index = $scope.indices[$scope.selectedItem];
      $scope.selectedItem = $scope.obj[$scope.index].url;
      $scope.currentTitle = $scope.obj[$scope.index].title;
      $scope.currentRating = $scope.obj[$scope.index].rating;
      $scope.ratingTitle = 'Rating: ';
    };

    $scope.ratingChanged = function () {
      $scope.currentRating = $scope.obj[$scope.index].rating = $scope.ratingNum;
    };

     $scope.allPics = function () {
      Pics.getAll()
      .then(function (pics) {
        pics.forEach(function (pic) {
          $scope.obj.push(pic);
        })
        $scope.selectedItem = $scope.obj[2].url;
      })
      .catch(function (err) {
        console.log(err);
      });
    };

    $scope.picUpload = function () {
      console.log('picLINK:', $scope.picLink);
      var url = $scope.picLink;
      Pics.addOne({name: $scope.picName, rating: $scope.picRating, url: url})
      .then(function (pic) {
        $scope.selectedItem = pic.url;
        //TODO: do something with pic
      })
      .catch(function (err) {
        console.log(err);
      });
      // $scope.obj.push({url: $scope.catLink, title: $scope.catName, rating: 0});
      // $scope.names.push($scope.catName);
      // $scope.currInd++;
      // $scope.indices[$scope.catName] = $scope.currInd;
      // $scope.catLink = '';
      // $scope.catName = '';
    };
  });
