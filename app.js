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
  $scope.activeSpan2=null;

  $scope.setActiveSpan = function(spanNumber) {
    $scope.activeSpan = spanNumber;
  };
  $scope.setActiveSpan2=function(spanNumber){
    console.log(spanNumber);
    $scope.activeSpan2=spanNumber;
  }
  $scope.items = [
    "Car Rental Desk", 
    "Pickup/Drop Facility", 
    "Parking", 
    "WiFi", 
    "Laundry", 
    "Riverside", 
    "Alarm", 
    "Extra bed"
];

$scope.selectedItems = [];

$scope.counter = function(selectedItem) {
    console.log(selectedItem); 
    if (selectedItem) {
        $scope.selectedItems.push(selectedItem);
        selectedItem = '';  
    } 
};

$scope.isBorderGreen = false;

$scope.changeBorder = function() {
    $scope.isBorderGreen = !$scope.isBorderGreen; 
};

$scope.removeAmenity = function(amenity) {
  var index = $scope.selectedItems.indexOf(amenity);
  if (index > -1) {
    $scope.selectedItems.splice(index, 1);
  }
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



       