var ml = angular.module('meli-example', ['ngRoute']);

ml.factory('meliCommon', () => {
    return {
        normalize: (text) => {
            return text.split(' ').join('-');
        },  
        denormalize: (text) => {
            return text.split('-').join(' ')
        }
    }
});

ml.controller('mainController', mainController);
ml.controller('resultsController', resultsController);
ml.controller('detailController', detailController);

ml.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
  $routeProvider
    .when('/', { templateUrl: '/', controller: 'mainController' })
    .when('/items', {templateUrl: '/items', controller: 'resultsController' })
    .when('/items/:id', {templateUrl: '/items/:id', controller: 'detailController' })
    .otherwise({ redirectTo: '/error' });

  $locationProvider.html5Mode({ enabled: true, requireBase: false }).hashPrefix('#');
}]);

ml.directive('ngEnter', () => {
    return (scope, element, attrs) => {
        element.bind("keydown keypress", (event) => {
            if (event.which === 13) {
                scope.$apply(() => {
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
});

ml.filter('meliCurrency', () => {
    return amount => "$ " + (amount ? amount.toString().replace(".", ","): "0");
});

ml.filter('meliInteger', () => {
    return amount => {
        var splittedAmount = amount ? amount.toString().split(".") : [];
        return "$ " + (splittedAmount.length ? splittedAmount[0] : "0");       
    };
});

ml.filter('meliDecimal', () => {
    return amount => {
        var splittedAmount = amount ? amount.toString().split(".") : [];
        return splittedAmount.length > 1 ? splittedAmount[1] : "00";       
    };
});

ml.filter('meliDetails', () => {
    return item => item ? 
        [(item.condition === "new" ? "Nuevo" : "Usado"), "-", item.sold_quantity, "vendidos"].join(" ") : undefined;
});