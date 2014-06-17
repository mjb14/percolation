'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('WqufController', ['$scope', 'WeightedQuickUnionUF', 'Percolation', function($scope, WeightedQuickUnionUF, Percolation) {

  
	Percolation.init(5);
	$scope.grid = Percolation.getGrid();
  
  
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
		
  
  }]);
