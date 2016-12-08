var app = angular.module('app', ['ui.router', 'ngResource']);

app.config(['$urlRouterProvider', '$stateProvider',
    function ($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('init', {
                url: '/',
                controller: 'initController',
                templateUrl: 'partials/_init.html'
            })
            .state('login', {
                abstract: true,
                url: '/login',
                templateUrl: 'partials/_login.html'
            })
            .state('login.client', {
                url: '/client',
                controller: 'clientAccessController',
                templateUrl: 'partials/_client_access.html'
            })
            .state('login.admin', {
                url: '/admin',
                controller: 'adminAccessController',
                templateUrl: 'partials/_admin_access.html'
            })
            .state('admin', {
                url: '/admin',
                abstract: true,
                templateUrl: 'partials/_admin_menu.html',
                data: {
                    authorization: true
                }
            })
            .state('admin.dashboard', {
                url: '/dashboard',
                controller: 'adminDashboardController',
                templateUrl: 'partials/_admin_dashboard.html',
                data: {
                    authorization: true
                }
            })
            .state('admin.drinks', {
                url: '/drinks',
                controller: 'adminDashboardController',
                templateUrl: 'partials/_admin_dashboard.html',
                data: {
                    authorization: true
                }
            })
            .state('admin.toppings', {
                url: '/toppings',
                controller: 'toppingsController',
                templateUrl: 'partials/_admin_toppings.html',
                data: {
                    authorization: true
                }
            })
            .state('admin.saveTopping', {
                url: '/saveTopping',
                controller: 'saveToppingController',
                templateUrl: 'partials/_admin_save_topping.html',
                data: {
                    authorization: true
                },
                params: {
                    topping: null
                }
            })
            .state('defineTable', {
                url: '/defineTable',
                controller: 'defineTableController',
                templateUrl: 'partials/_define_table.html'
            })
            .state('clientAccess', {
                url: '/clientAccess',
                controller: 'clientAccessController',
                templateUrl: 'partials/_client_access.html'
            })
            .state('clientDashboard', {
                url: '/clientDashboard',
                controller: 'clientDashboardController',
                templateUrl: 'partials/_client_dashboard.html'
            })
            .state('clientListMeal', {
                url: '/clientListMeal',
                controller: 'clientListMealController',
                templateUrl: 'partials/_client_list_meal.html'
            });

    }
]);