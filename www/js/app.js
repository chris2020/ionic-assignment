//storing in variable for better readability
var christyApp = angular.module('calorific', ['ionic']);

christyApp.controller('dailyCalories', function($rootScope, $scope){
 
    $scope.items = [{thumbnail: "img/egg.jpg", text: "Boiled Egg", value: 80}, {thumbnail: "img/brownBread.jpg",text: "Brown Bread", value: 100}, {thumbnail: "img/banana.jpg",text: "Banana", value: 90},                         {thumbnail: "img/apple.jpg",text: "Apple", value: 50}, {thumbnail: "img/potato.jpg",text: "Potato", value: 110}, {thumbnail: "img/carrot.jpg",text: "Carrot", value: 50}];
    
    
    $scope.addCal = function(digit){
        
        $rootScope.dayCal += digit;
        
        console.log("Function Fired");
        
        console.log(digit);
        //console.log($scope.dayCal);
        //console.log($scope.items[0].value); 
         
    }//End addCal
    
    //Function to reset calorie counter to 0
    $scope.reset = function(){
    
        $rootScope.dayCal = 0;
    
    }//End reset function

});

christyApp.config(function($stateProvider, $urlRouterProvider) 
{
    
          $stateProvider
          
          .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: "tabs.html"
          })
          
          .state('tab.home', {
            url: '/home',
            views: {
              'home': {
                templateUrl: 'home.html',
                controller: 'dailyCalories'
              }
            }
          })
          
          .state('tab.list', {
            url: '/list',
            views: {
              'list': {
                templateUrl: 'list.html',
                controller: 'dailyCalories'
              }
            }
          })
          
          .state('tab.input', {
            url: '/input',
            views: {
              'input': {
                templateUrl: 'input.html',
                controller: 'dailyCalories'
              }
            }
          });
    
          $urlRouterProvider.otherwise('/tab/home');

});
                   
christyApp.run(function($ionicPlatform) 
{
    
  $ionicPlatform.ready(function() 
  {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) 
    {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
      
    if(window.StatusBar)
    {
      StatusBar.styleDefault();
    }
      
  });
    
});
