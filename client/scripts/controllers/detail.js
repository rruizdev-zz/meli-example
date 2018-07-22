function detailController($scope, $controller) {
    $controller('mainController', {$scope: $scope});

    var vm = $scope;
    
    vm.item = undefined;
    vm.categories = [];

    vm.buyItem = () => {
        alert("¡Aún no puedes comprar éste artículo!");
    }

    vm.getItem = () => {
        var itemId = window.location.pathname.split('/')[2];        
        var data = new XMLHttpRequest();
        
        data.onreadystatechange = function() {
            if ((this.readyState === 4 && this.status === 200) && (this.responseText && this.responseText.length)) {
                var jsonResponse = JSON.parse(this.responseText);
                vm.item = new detail(jsonResponse.item);
                vm.categories = JSON.parse(atob(sessionStorage.getItem(["ic", itemId].join("-"))));
                vm.$evalAsync();
            } 
        };

        data.open('GET', '/items/query/' + itemId, true);
        data.send();
    }

    vm.getItem();
}