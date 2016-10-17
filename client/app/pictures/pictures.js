angular.module('picto', [])
  .controller('pictureController', function ($scope) {
    $scope.indices = {Paco:0, Flaco:1, Taco:2, Caco:3};
    $scope.obj = [{url: 'https://pbs.twimg.com/profile_images/737359467742912512/t_pzvyZZ_400x400.jpg' , title: 'Paco', rating: 3}, {url: 'https://pbs.twimg.com/profile_images/625769159339737088/2dwpQAXA.jpg' , title: 'Flaco', rating: 4}, {url: 'https://pbs.twimg.com/profile_images/630664501776527361/nIK2xTUE.jpg' , title: 'Taco', rating: 4}, {url: 'https://pbs.twimg.com/profile_images/659017415339220992/0QxomPDQ.jpg' , title: 'Caco', rating: 5} ];
    $scope.names = ['Paco', 'Flaco', 'Taco', 'Caco'];
    $scope.rating = [1, 2, 3, 4, 5];
    $scope.currInd = 3;

    $scope.selectedItemChanged = function () {
      $scope.index = $scope.indices[$scope.selectedItem];
      $scope.selectedItem = $scope.obj[$scope.index].url;
      $scope.currentTitle = $scope.obj[$scope.index].title;
      $scope.currentRating = $scope.obj[$scope.index].rating;
      $scope.ratingTitle = 'Rating: ';
    }

    $scope.ratingChanged = function () {
      $scope.currentRating = $scope.obj[$scope.index].rating = $scope.ratingNum;
    }

    $scope.catUpload = function () {
      $scope.obj.push({url: $scope.catLink, title: $scope.catName, rating: 0});
      $scope.names.push($scope.catName);
      $scope.currInd++;
      $scope.indices[$scope.catName] = $scope.currInd;
      $scope.catLink = '';
      $scope.catName = '';
    }
  });