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
    $scope.currIndex = 0;
    $scope.maxLength = $scope.obj.length;

    $scope.key = function ($event) {
      if ($event.keyCode === 39) {
        $scope.rightClick();
      } else if ($event.keyCode === 37) {
        $scope.leftClick();
      }
    };

    $scope.rightClick = function () {
      if ($scope.obj.length === $scope.currIndex) {
        $scope.currIndex = 0;
        $scope.selectedItem = $scope.obj[$scope.currIndex].url;
      } else {
        $scope.currIndex++;
        $scope.selectedItem = $scope.obj[$scope.currIndex].url;
      }
    };

    $scope.leftClick = function () {
      if (0 === $scope.currIndex) {
        console.log('ZERO');
        console.log($scope.maxLength);
        console.log($scope.obj.length);
        $scope.currIndex = $scope.obj.length;
        $scope.selectedItem = $scope.obj[$scope.currIndex].url;
      } else {
        $scope.currIndex--;
        $scope.selectedItem = $scope.obj[$scope.currIndex].url;
      }
    };

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
        });
        $scope.currIndex = 2;
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
        $scope.picLink = '';
        $scope.picName = '';
        $scope.picRating = '';

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
