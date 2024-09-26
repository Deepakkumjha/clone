app.controller("MainController", function ($scope) {
  $scope.arr = [
    { room: "DELUXE SUITE", details: "5ROOMS | BO#1 | 10#2 | MO#4| TC#2| ЕР, CP|" },
    { room: "SUPER DELUXE", details: "10 ROOMS | BO#1 | 10#2 | MO#4 | TC#2 | EP, CP|" },
    { room: "LOTUS SUITE", details: "10 ROOMS | BO#1 | 10#2 | MO#4 | TC#2 | ЕР, CP|" },
    { room: "PREMIUM SUITE", details: "10 ROOMS | BO#1 | 10#2 | MO#4 | TC#2 | ЕР, CP|" },
    { room: "EXECUTIVE SUITE", details: "10 ROOMS | BO#1 | 10#2 | MO#4 | TC#2 | ЕР, CP|" },
  ];
  $scope.bedTypes = [
    "Double Bed", "Futon", "King Bed", "Murphy Bed", "Queen Bed", "Sofa Bed", "Tatami Mats", "Twin Bed", "Single Bed", "Full", "Run of the house", "Dorm Bed", "Mattress",
  ];
  $scope.searchText = "";

  $scope.activeSpan = null;
  $scope.activeSpanRooms = null;

  $scope.setActiveSpan = function (spanNumber) {
    $scope.activeSpan = spanNumber;
  };
  $scope.setActiveSpanRooms = function (spanNumber) {
    console.log(spanNumber);
    $scope.activeSpanRooms = spanNumber;
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
  $scope.selectedBeds = [];
  $scope.selectedExtraBeds = [];


  $scope.counter = function (selectedItem, id) {
    if (selectedItem && id === 1) {
      $scope.selectedItems.push(selectedItem);
      selectedItem = '';
    } else if (selectedItem && id === 2) {
      $scope.selectedBeds.push(selectedItem);
      selectedItem = '';
    } else if (selectedItem && id === 3) {
      $scope.selectedExtraBeds.push(selectedItem);
      selectedItem = '';
    }


  };


  $scope.isBorderGreen = false;
  $scope.changeBorder = function () {
    $scope.isBorderGreen = !$scope.isBorderGreen;
  };



  $scope.removeAmenity = function (amenity, id) {
    if (id === 1) {
      var index = $scope.selectedItems.indexOf(amenity);
      if (index > -1) {
        $scope.selectedItems.splice(index, 1);
      }
    } else if (id === 2) {
      var index = $scope.selectedBeds.indexOf(amenity);
      if (index > -1) {
        $scope.selectedBeds.splice(index, 1);
      }
    } else if (id === 3) {
      var index = $scope.selectedExtraBeds.indexOf(amenity);
      if (index > -1) {
        $scope.selectedExtraBeds.splice(index, 1);
      }
    }
  };

});

app.config(function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'partials/basicDetails.html',
    })
    .when('/room', {
      templateUrl: 'partials/roomDetails.html',
    })
    .when('/bedTypes', {
      templateUrl: 'partials/bedTypes.html'
    })

});



