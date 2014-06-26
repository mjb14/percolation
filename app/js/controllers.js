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
			$timeout(function(){openSitesUntilPercolates(N);}, 100, true);
		} else {
			// flip the correct path for display
			Percolation.getSolutionAsPath();
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
	
	$scope.n = 5;
	
  
  }])
  
  .controller('LinkedListController', ['$scope', 'LinkedList', function($scope, LinkedList) {

	$scope.item = "";
	$scope.sampleItem = "";
	$scope.items = [];
	
	$scope.iterate = function() {
		$scope.items = [];
		var i = LinkedList.iterator();
		while(i.hasNext()){
			var s = i.next();
			$scope.items.push(s);
			console.log(s);
		}
	}
	
	$scope.sample = function() {
		$scope.sampleItem = LinkedList.sample();
	}
  
	$scope.first = function() {
		return LinkedList.getFirst();
	}	
	
	$scope.size = function() {
		return LinkedList.size();
	}
	
	$scope.addFirst = function() {
		LinkedList.addFirst($scope.item);
		$scope.item = "";
		$scope.iterate();
	}
	
	$scope.removeFirst = function() {
		LinkedList.removeFirst();
		$scope.iterate();
	}
  
	$scope.removeLast = function() {
		LinkedList.removeLast();
		$scope.iterate();
	}
  
	$scope.addLast = function() {
		LinkedList.addLast($scope.item);
		$scope.item = "";
		$scope.iterate();
	}
	
	$scope.last = function(){
		return LinkedList.getLast();
	}
  
  $scope.first = function(){
		return LinkedList.getFirst();
	}
  
  }]);
