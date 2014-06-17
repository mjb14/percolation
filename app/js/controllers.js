'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('WqufController', ['$scope', 'WeightedQuickUnionUF', 'Percolation', function($scope, WeightedQuickUnionUF, Percolation) {

  
  /*
	Percolation.init(5);
	$scope.grid = Percolation.getGrid();
	Percolation.printGrid();
  
	$scope.init = function() {
		WeightedQuickUnionUF.init($scope.n);	
	}
  
	$scope.connect = function() {
		if( WeightedQuickUnionUF.connected($scope.p, $scope.q) ) {
			return;
		}
		
		WeightedQuickUnionUF.union($scope.p, $scope.q);
		
	}

	$scope.getCount = function() {
		$scope.numComponents = WeightedQuickUnionUF.getCount();
		$scope.arrayData = WeightedQuickUnionUF.getArray();
	}
	
	$scope.wquf = WeightedQuickUnionUF;
	*/
	
	 var getRandomNumber = function(N){
        return Math.floor((Math.random() * N) + 1);
    }

	var openRandomSite = function(p, N){

        i = getRandomNumber(N);
        j = getRandomNumber(N);

        if(p.isFull(i,j)){
            p.open(i,j);
            return true;
        } 
		else{
			return openRandomSite(p, N);
		}
    }
	
	var openSitesUntilPercolates = function(p, N) {
        while(!p.percolates()) {
            openRandomSite(p,N);
            p.printGrid();
        }
    }
	
		var N = 3;
        Percolation.init(N);
		Percolation.open(1,1);
        //openSitesUntilPercolates(Percolation, N);
	
	
	/*
    

    public static void openSitesUntilPercolates(Percolation p, int N){
        while(!p.percolates()) {
            openRandomSite(p,N);
            p.printGrid();
        }
    }


    public static void main(String[] args) {
        int N = 100;
        Percolation p = new Percolation(N);
        openSitesUntilPercolates(p, N);
    }
	*/
  
  }]);
