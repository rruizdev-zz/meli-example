var ml = angular.module('meli-example', ['ngRoute']);

ml.factory('meliCommon', function() {
    return {
        normalize: function(text) {
            return text.split(' ').join('-');    
        },  
        denormalize: function(text) {
            return text.split('-').join(' ');
        },
        removeChars: function(text) {
            return decodeURI(text).replace('ñ', 'n').replace('á', 'a').replace('é', 'e').replace('í', 'i').replace('ó', 'o').replace('ú', 'u');
        } 
    };
});

ml.controller('mainController', mainController);
ml.controller('resultsController', resultsController);
ml.controller('detailController', detailController);
ml.controller('errorController', errorController);

ml.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', { templateUrl: '/', controller: 'mainController' })
    .when('/items', {templateUrl: '/items', controller: 'resultsController' })
    .when('/items/:id', {templateUrl: '/items/:id', controller: 'detailController' })
    .otherwise({ redirectTo: '/error', controller: 'errorController' });

  $locationProvider.html5Mode({ enabled: true, requireBase: false }).hashPrefix('#');
}]);

ml.directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind('keydown keypress', function(event) {
            if (event.which === 13) {
                scope.$apply(function() {
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            };
        });
    };
});

ml.filter('meliCurrency', function() {
    return function(amount){
        return '$ ' + (amount ? amount.toString().replace('.', ','): '0');    
    };
});

ml.filter('meliInteger', function() {
    return function(amount) {
        var splittedAmount = amount ? amount.toString().split('.') : [];
        return '$ ' + (splittedAmount.length ? splittedAmount[0] : '0');       
    };
});

ml.filter('meliDecimal', function() {
    return function(amount) {
        var splittedAmount = amount ? amount.toString().split('.') : [];
        return splittedAmount.length > 1 ? splittedAmount[1] : '00';       
    };
});

ml.filter('meliDetails', function() {
    return function(item) {
        return item ? [(item.condition === 'new' ? 'Nuevo' : 'Usado'), '-', item.sold_quantity, 'vendidos'].join(' ') : undefined;
    };
});