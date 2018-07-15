var ml = angular.module('meli-example', ['ngRoute']);

ml.controller('mainController', mainController);
ml.controller('resultsController', resultsController);

ml.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
  $routeProvider
    .when('/', { templateUrl: '/', controller: 'mainController' })
    .when('/items', {templateUrl: '/items', contorller: 'resultsController' })
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