function itemController($scope, $controller) {
    $controller('mainController', {$scope: $scope});

    var vm = $scope;
}