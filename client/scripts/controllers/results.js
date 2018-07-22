function resultsController($scope, $controller) {
    $controller('mainController', {$scope: $scope});

    var vm = $scope;
    
    vm.results = undefined;
    vm.categories = undefined;

    vm.showItem = id => {
      sessionStorage.setItem(["ic", id].join("-"), btoa(JSON.stringify(vm.categories)))
      window.location.href = "/items/" + id;
    }

    vm.getResults = () => {
      var data = new XMLHttpRequest();
      data.onreadystatechange = function() {
          vm.results = [];
          vm.categories = [];
          if ((this.readyState === 4 && this.status === 200) && (this.responseText && this.responseText.length)) {
            var jsonResponse = JSON.parse(this.responseText);

            vm.results.length = 0;
            if (jsonResponse.items && jsonResponse.items.length) jsonResponse.items.forEach(currentResult => {
              vm.results.push(new result(currentResult));
            });

            vm.categories = jsonResponse.categories;
            vm.$evalAsync();
          }
      };
      data.open('GET', '/query/' + vm.querySearch, true);
      data.send();
    }

    vm.getResults();

}