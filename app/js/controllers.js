'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('WqufController', ['$scope', 'WeightedQuickUnionUF', function($scope, WeightedQuickUnionUF) {

  
	$scope.init = function() {
		WeightedQuickUnionUF.init($scope.n);	
	}
  
	$scope.connect = function() {
		if( WeightedQuickUnionUF.connected($scope.p, $scope.q) ) {
			return;
		}
		
		WeightedQuickUnionUF.union($scope.p, $scope.q);
		
		$scope.numComponents = WeightedQuickUnionUF.count();
	}
	
	$scope.wquf = WeightedQuickUnionUF;
		
  
  }]);
