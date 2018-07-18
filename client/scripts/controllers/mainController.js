function mainController($scope) {
  var vm = $scope;

  vm.normalize = (text) => {
    return text.split(' ').join('-');
  }

  vm.denormalize = (text) => {
    return text.split('-').join(' ')
  }

  vm.querySearch = document.getElementById('querySearch') ? vm.denormalize(document.getElementById('querySearch').value) : "";

  vm.searchItems = () => {
      if (vm.querySearch && vm.querySearch.length) {
        var newSearch = vm.normalize(vm.querySearch);
        window.location.href = "/items?search=" + newSearch;
      }
  }

  vm.goHome = () => {
    window.location.href = "/";
  }
}