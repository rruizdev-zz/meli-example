function errorController($scope, $controller) {
    $controller('mainController', {$scope: $scope});

    var vm = $scope;
    
    vm.codigo = document.getElementById('errorCode') ? document.getElementById('errorCode').value : "";

    vm.showError = () => {
      console.log(vm.codigo);
    };

    vm.showError();
}