angular.module('picto', [])
  .controller('pictureController', function ($scope) {
    $scope.pictures = {};
    $scope.indexes = {beach:0, sports:1, sand: 2, travel: 3};
    $scope.picturesObj = [{url: 'https://pbs.twimg.com/profile_images/737359467742912512/t_pzvyZZ_400x400.jpg', title: 'Kitty1'}, {url: 'https://pbs.twimg.com/profile_images/625769159339737088/2dwpQAXA.jpg', title: 'Kitty2'}, {url: 'https://pbs.twimg.com/profile_images/630664501776527361/nIK2xTUE.jpg', title: 'Kitty3'}];
    $scope.empty = ['https://pbs.twimg.com/profile_images/737359467742912512/t_pzvyZZ_400x400.jpg', 'https://pbs.twimg.com/profile_images/625769159339737088/2dwpQAXA.jpg', 'https://pbs.twimg.com/profile_images/630664501776527361/nIK2xTUE.jpg'];
    $scope.titles = [];
    $scope.test = ['beach', 'sports', 'sand', 'travel'];
    $scope.val = true;

    $scope.getPics = function () {
      console.log($scope.tes);
       // = $scope.indexes[$scope.tes];
      // console.log('index', index);

      // $scope.tempy = $scope.indexes[$scope.tes];
      // var first = $scope.tes;
      // var tempw = $scope.indexes.first;
      // console.log(tempw);
      // $scope.titles[0] = $scope.picturesObj.tempw.url;


      // if ($scope.val) {
      //   $scope.titles[0] = $scope.empty[0];
      //   $scope.val = false;
      // } else {
      //   $scope.titles[0] = $scope.empty[1];
      //   $scope.val = true;
      // }
    }

    $scope.runThis = function () {

      $scope.empty.push($scope.target);
      console.log('RUN THIS');
    }



    $scope.clickPicTitle = function () {
      //
      //display picture clicked
      // $scope.titles.forEach(function (title) {
      //   $scope.title = title;
      // });

      // $scope.tempTitle = $scope.titles.pop();

      // $scope.empty.push($scope.tempTitle);




      // $scope.titles.push('hello');
      console.log('in here');

    }
  });