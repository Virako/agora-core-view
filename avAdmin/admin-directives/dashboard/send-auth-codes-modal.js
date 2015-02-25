angular.module('avAdmin')
  .controller('SendAuthCodesModal',
    function($scope, $modalInstance, election) {
      $scope.election = election;
      $scope.ok = function () {
        $modalInstance.close();
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    });