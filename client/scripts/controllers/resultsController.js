function resultsController($scope, $controller) {
    $controller('mainController', {$scope: $scope});

    var vm = $scope;
    
    vm.results = [];
    vm.categories = [];

    vm.getResults = () => {
      var data = new XMLHttpRequest();
      data.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            var jsonResponse = JSON.parse(this.responseText);

            vm.results.length = 0;
            jsonResponse.items.forEach(currentResult => {
              vm.results.push(new result(currentResult));
            });

            vm.categories = jsonResponse.categories;
            vm.$apply();
          }
      };
      data.open('GET', '/query/' + vm.querySearch, true);
      data.send();
    }

    vm.getResults();

}