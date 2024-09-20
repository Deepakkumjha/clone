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

  // This function is called when a span is clicked
  $scope.setActiveSpan = function(spanNumber) {
    // Set activeSpan to the spanNumber (1, 2, or 3) that was clicked
    $scope.activeSpan = spanNumber;
  };
});
