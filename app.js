function loadUp($scope, $http) {
    $scope.add = function(){
	  alert("add me, baby!");
	  var f = document.getElementById('file').files[0],
	      r = new FileReader();
	  r.onloadend = function(e){
	  	console.log("What have we got: " , e );
	    var data = e.target.result;
	    //send you binary data via $http or $resource or do anything else with it
	  }
	  r.readAsBinaryString(f);
	}
}
//var loadApp = angular.module('loadApp', ['js.loadcontrol']);

//angular.module('loadApp',[]);

/*$scope.add = function(){
  alert("add me, baby!");
  var f = document.getElementById('file').files[0],
      r = new FileReader();
  r.onloadend = function(e){
    var data = e.target.result;
    //send you binary data via $http or $resource or do anything else with it
  }
  r.readAsBinaryString(f);
} */