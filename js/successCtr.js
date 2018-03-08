
myapp.controller('SuccessController', function($scope   , $location , myService ) {
  
  $scope.message = "welcome to ";

  $scope.logout = function(){
    myService.logoutUser();
    
  };

  $scope.username = myService.getUser();
  if(!$scope.username){
    $location.path("/login");
  };

});
