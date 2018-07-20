function detailController($scope, $controller, $location) {
    $controller('mainController', {$scope: $scope});

    var vm = $scope;
    
    vm.item = undefined;
    vm.details = "";
    vm.categories = undefined;
    vm.price = {
        amount: undefined,
        decimals: undefined
    }

    vm.buyItem = () => {
        alert("¡Aún no puedes comprar éste artículo!");
    }

    vm.getItem = () => {
        var data = new XMLHttpRequest();
        data.onreadystatechange = function() {
            if ((this.readyState === 4 && this.status === 200) && (this.responseText && this.responseText.length)) {
                var jsonResponse = JSON.parse(this.responseText);
                vm.item = new detail(jsonResponse.item);
                vm.details = [vm.item.condition, "-", vm.item.sold_quantity, "vendidos"].join(" ");
                vm.price.amount = vm.item.price.split(",")[0]
                vm.price.decimals = vm.item.price.split(",")[1];
                vm.categories = jsonResponse.categories;
                vm.$apply();
            } else {
                vm.item = {};
            }
        };

        data.open('GET', '/items/query/' + $location.path().split('/')[2], true);
        data.send();
    }

    vm.getItem();
}