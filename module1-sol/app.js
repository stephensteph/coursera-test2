(function () {
  'use strict';



angular.module('lunchChecker', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController ($scope) {

$scope.lunchContent = "";
$scope.hasError = false;
$scope.errorMsg = null;
$scope.stats = 0;
$scope.emptyItems = 0;


$scope.TextChecker = function () {
  reload();


  if ($scope.lunchContent == undefined) {
    return TextError ("Please enter data first", true);
  }

  var lunch = $scope.lunchContent.trim();
  if (lunch == "") {
    return TextError ("Please enter data first", true);
  }

  var contents = lunch.split(',');
  if (contents.length == 0) {
    return TextError ("Please enter data first", true);
  }

  var lunchItems = [];
  for (var i = 0; i < contents.length; i++) {
    var item = contents[i].trim();
    if (item.length > 0) {
      lunchItems.push(item);
    } else {
      $scope.emptyItems++;
    }
  }


  if (lunchItems.length == 0) {
    return TextError ("Please enter data first", true);
  }

  if (lunchItems.length <= 3) {
    $scope.stats = 1;
  } else {
    $scope.stats = 2;
  }

  $scope.lunchContent = lunchItems.join(', ');

  return;
  };

  function TextError(msg, reload) {
    $scope.hasError = true;
    $scope.errorMsg = msg;
    if (reload) {
      $scope.lunchContent = "";
    }
    return;
  }

  function reload() {
    $scope.hasError = false;
    $scope.errorMsg = null;
    $scope.stats = 0;
    $scope.emptyItems = 0;

  }




}



})();
