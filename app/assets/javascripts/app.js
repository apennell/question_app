angular
    .module('rangular', [
        'ngRoute',
        'templates'
    ]).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'question-index.html',
                controller: 'QuestionIndexCtrl'
            })
            .when('/questions/:questionId', {
                templateUrl: 'question-show.html',
                controller: 'QuestionShowCtrl'
            });
            
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });