app.controller("MainController", function ($scope) {
  $scope.arr = [
    { room:"DELUXE SUITE", details: "5ROOMS | BO#1 | 10#2 | MO#4| TC#2| ЕР, CP|"},
    { room: "SUPER DELUXE", details: "10 ROOMS | BO#1 | 10#2 | MO#4 | TC#2 | EP, CP|" },
    { room: "LOTUS SUITE", details: "10 ROOMS | BO#1 | 10#2 | MO#4 | TC#2 | ЕР, CP|" },
    {room:"PREMIUM SUITE",details:"10 ROOMS | BO#1 | 10#2 | MO#4 | TC#2 | ЕР, CP|"},
    {room:"EXECUTIVE SUITE",details:"10 ROOMS | BO#1 | 10#2 | MO#4 | TC#2 | ЕР, CP|"},
  ];
  $scope.searchText="";

  $scope.activeSpan = null;

  $scope.setActiveSpan = function(spanNumber) {
    $scope.activeSpan = spanNumber;
  };
});

app.config(function($routeProvider) {
  $routeProvider
  .when('/home', {
      templateUrl: 'partials/basicDetails.html',
  })
  .when('/room', {
      templateUrl: 'partials/roomDetails.html',
  })
  
});
