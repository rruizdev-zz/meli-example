function mainController($scope, meliCommon) {
  var vm = $scope;

  vm.querySearch = document.getElementById('querySearch') ? meliCommon.denormalize(document.getElementById('querySearch').value) : "";

  vm.searchItems = () => {
      if (vm.querySearch && vm.querySearch.length) {
        var newSearch = meliCommon.normalize(vm.querySearch);
        window.location.href = "/items?search=" + newSearch;
      }
  }

  vm.goHome = () => {
    window.location.href = "/";
  }
}