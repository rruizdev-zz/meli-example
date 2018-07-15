function mainController($scope) {
  var vm = $scope;

  vm.querySearch = document.getElementById('querySearch') ? document.getElementById('querySearch').value : "";

  vm.searchItems = () => {
      if (vm.querySearch && vm.querySearch.length) {
        window.location.href = "/items?search=" + vm.querySearch;;
      }
  }
}