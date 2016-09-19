(function() {
'use strict';

angular.module('LunchChecker', [])
  .controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope) {
  $scope.lunchItems = "";
  $scope.message = "";
  $scope.messageStyle = "";

  $scope.check = function() {
    var numberOfItems = countItems($scope.lunchItems);
    if ($scope.lunchItems == "" || numberOfItems == 0) {
      $scope.message = "Please enter data first";
      $scope.messageStyle = {"color":"red"};
    } else if (numberOfItems < 4) {
      $scope.message = "Enjoy!";
      $scope.messageStyle = {"color":"green"};
    } else {
      $scope.message = "Too much!";
      $scope.messageStyle = {"color":"green"};
    }
  }
};

function countItems(lunchItems) {
  var items = lunchItems.split(",");
  var count = 0;
  for (var i = 0; i < items.length; i++) {
    if (items[i].trim() != "") {
      count++;
    }
  }
  return count;
};

})();
