var app = angular.module('app', ['ui.router', 'ngResource', 'btford.socket-io']);

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
                    pizza: null
                }
            })
            .state('admin.drinks', {
                url: '/drinks',
                controller: 'drinksController',
                templateUrl: 'partials/_admin_drinks.html',
                data: {
                    authorizationAdmin: true
                }
            })
            .state('admin.saveDrinks', {
                url: '/saveDrink',
                controller: 'saveDrinkController',
                templateUrl: 'partials/_admin_save_drink.html',
                data: {
                    authorizationAdmin: true
                },
                params: {
                    drink: null
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
            .state('admin.logs', {
                url: '/logs',
                abstract: true,
                controller: 'adminLogsController',
                templateUrl: 'partials/_admin_logs.html',
                data: {
                    authorizationAdmin: true
                }
            })
            .state('admin.logs.clients', {
                url: '/clients',
                controller: 'adminUsersController',
                templateUrl: 'partials/_admin_users.html',
                data: {
                    authorizationAdmin: true
                }
            })
            .state('admin.logs.pizzas', {
                url: '/pizzas',
                controller: 'adminLogsPizzaController',
                templateUrl: 'partials/_admin_logs_pizza.html',
                data: {
                    authorizationAdmin: true
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
            .state('client.pizzas', {
                url: '/pizzas',
                controller: 'clientPizzaController',
                templateUrl: 'partials/_client_pizzas.html',
                data: {
                    isProtectedClient: true,
                    authorizationTable: true
                }
            });

    }
]);