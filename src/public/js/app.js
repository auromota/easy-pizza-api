var app = angular.module("app",['ui.router', 'ngResource']);

app.config(function($urlRouterProvider, $stateProvider){
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('/', {
            url: '/',
            controller: 'initController',
            templateUrl: 'partials/_init.html'
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
        .state('clientListMeal',{
            url: '/clientListMeal',
            controller: 'clientListMealController',
            templateUrl: 'partials/_client_list_meal.html'
        })
        .state('adminDashboard', {
            url: '/adminDashboard',
            controller: 'adminDashboardController',
            templateUrl: 'partials/_admin_dashboard.html'            
        })
        .state('toppings', {
            url: '/toppings',
            controller: 'toppingsController',
            templateUrl: 'partials/_toppings.html'
        })
        .state('newTopping', {
            url: '/newTopping',
            controller: 'newToppingController',
            templateUrl: 'partials/_new_topping.html'
        });
    
})