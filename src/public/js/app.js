var app = angular.module('app', ['ui.router', 'ngResource']);

app.config(['$urlRouterProvider', '$stateProvider',
    function ($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
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
                controller: 'adminMenuController'
            })
            .state('admin.dashboard', {
                url: '/dashboard',
                controller: 'adminDashboardController',
                templateUrl: 'partials/_admin_dashboard.html',
                data: {
                    authorizationAdmin: true
                }
            })
            .state('admin.pizzas', {
                url: '/pizzas',
                controller: 'pizzasController',
                templateUrl: 'partials/_admin_pizzas.html',
                data: {
                    authorization: true
                }
            })
            .state('admin.savePizza', {
                url: '/savePizzas',
                controller: 'savePizzaController',
                templateUrl: 'partials/_admin_save_pizzas.html',
                data: {
                    authorization: true
                },
                params: {
                    topping: null
                }
            })                        
            .state('admin.drinks', {
                url: '/drinks',
                controller: 'adminDashboardController',
                templateUrl: 'partials/_admin_dashboard.html',
                data: {
                    authorizationAdmin: true
                }
            })
            .state('admin.toppings', {
                url: '/toppings',
                controller: 'toppingsController',
                templateUrl: 'partials/_admin_toppings.html',
                data: {
                    authorizationAdmin: true
                }
            })
            .state('admin.saveTopping', {
                url: '/saveTopping',
                controller: 'saveToppingController',
                templateUrl: 'partials/_admin_save_topping.html',
                data: {
                    authorizationAdmin: true
                },
                params: {
                    topping: null
                }
            })
            .state('client', {
                url: '/client',
                abstract: true,
                templateUrl: 'partials/_client_menu.html',
                controller: 'clientMenuController'
            })
            .state('table', {
                url: '/table',
                templateUrl: 'partials/_client_table.html',
                controller: 'clientTableController',
                data: {
                    authorizationClient: true,
                    tableNotSet: true
                }
            })
            .state('client.orders', {
                url: '/orders',
                controller: 'clientOrderController',
                templateUrl: 'partials/_client_orders.html',
                data: {
                    isProtectedClient: true,
                    authorizationTable: true
                }
            })
            .state('client.drinks', {
                url: '/drinks',
                controller: 'clientDrinkController',
                templateUrl: 'partials/_client_drinks.html',
                data: {
                    isProtectedClient: true,
                    authorizationTable: true
                }
            })
            .state('defineTable', {
                url: '/defineTable',
                controller: 'defineTableController',
                templateUrl: 'partials/_define_table.html'
            })
            .state('clientListMeal', {
                url: '/clientListMeal',
                controller: 'clientListMealController',
                templateUrl: 'partials/_client_list_meal.html'
            });

    }
]);