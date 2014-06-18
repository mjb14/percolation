'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('WqufController', ['$scope', '$timeout', 'Percolation', function($scope, $timeout, Percolation) {

	 var getRandomNumber = function(N){
        return Math.floor((Math.random() * N) + 1 - 1);
    }

	var openRandomSite = function(N){
        var i = getRandomNumber(N);
        var j = getRandomNumber(N);

        if(Percolation.isFull(i,j)){
            Percolation.open(i,j);
            return true;
        } 
		else{
			return openRandomSite(N);
		}
    }
	
	var openSitesUntilPercolates = function(N) {
		if(!Percolation.percolates()){
		    openRandomSite(N);
            Percolation.printGrid();
			$timeout(function(){openSitesUntilPercolates(N);}, 500, true);
		}
    }
	
	$scope.grid = function() {
		return Percolation.getGrid();
	}
	
	$scope.numberOpen = function() {
		return Percolation.getNumberOfOpenSpaces();
	}
	
	$scope.runSimulation = function() {
		var N = $scope.n;
		$scope.totalSpaces = N * N;
		Percolation.init(N);
        openSitesUntilPercolates(N);
	}
	
	$scope.n = 3;
	
  
  }]);
