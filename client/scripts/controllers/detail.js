function detailController($scope, $controller, $location) {
    $controller('mainController', {$scope: $scope});

    var vm = $scope;
    
    vm.item = undefined;

    vm.buyItem = () => {
        alert("¡Aún no puedes comprar éste artículo!");
    }

    vm.getItem = () => {
        var data = new XMLHttpRequest();
        data.onreadystatechange = function() {
            if ((this.readyState === 4 && this.status === 200) && (this.responseText && this.responseText.length)) {
                var jsonResponse = JSON.parse(this.responseText);
                vm.item = new detail(jsonResponse.item);
            } else {
                vm.item = {};
            }
            vm.$apply();
        };

        data.open('GET', '/items/query/' + $location.path().split('/')[2], true);
        data.send();
    }

    vm.getItem();
}