
angular.module('modules.Percolation', []).factory('Percolation', [ 'WeightedQuickUnionUF',
    function(WeightedQuickUnionUF) {
        
        var service = {
			grid: [],
			gridSize: 0,
			init: function(N) {
				service.grid = [];
			
				service.gridSize = N;
				WeightedQuickUnionUF.init(N*N+2);
				
				// Initialize the array
				for (var i = 0; i < N; i++) {
					service.grid[i] = [];
					for (var j = 0; j < N; j++) {
						service.grid[i][j] = 0;
					}
				}
				
			},
		
			open: function(i,j) {
			
		        var p;
				var q;
				var wufPositionTarget;
				var wufPositionSource;
				
				
				if( !service.isOpen(i,j)) {

                service.grid[i][j] = 1;

                // item can be connected up, down, left, or right, so need 4 checks
                // to then do all unions off of

                p = i;
                q = j;
                wufPositionSource = (q) + (service.gridSize  * p) + 1;

                // check the up
                if(i > 0){
                    p = i-1;
                    q = j;
                    wufPositionTarget = (q) + (service.gridSize  * p) + 1;
                    if(service.isOpen(p,q) && !WeightedQuickUnionUF.connected(wufPositionTarget,wufPositionSource)){
                        WeightedQuickUnionUF.union(wufPositionTarget,wufPositionSource);
                    }
                } else if(i == 0){
                    // union with our super root since we are in 1st row
                    if(!WeightedQuickUnionUF.connected(wufPositionSource,0)) {
                        WeightedQuickUnionUF.union(wufPositionSource, 0);
                    }
                }

                // check the down
                if(i < service.gridSize-1){
                    p = i+1;
                    q = j;
                    wufPositionTarget = (q) + (service.gridSize  * p) + 1;
                    if(service.isOpen(p,q) &&  !WeightedQuickUnionUF.connected(wufPositionTarget,wufPositionSource)){
                        WeightedQuickUnionUF.union(wufPositionTarget,wufPositionSource);
                    }
                } else if(i == service.gridSize - 1){
                    // union with our super root since we are in 1st row
                    if(!WeightedQuickUnionUF.connected(wufPositionSource,service.gridSize*service.gridSize+1)) {
                        WeightedQuickUnionUF.union(wufPositionSource, service.gridSize*service.gridSize+1);
                    }
                }

                // check the right
                if(j < service.gridSize-1){
                    p = i;
                    q = j+1;
                    wufPositionTarget = (q) + (service.gridSize  * p) + 1;
                    if(service.isOpen(p,q) && !WeightedQuickUnionUF.connected(wufPositionTarget,wufPositionSource)){
                        WeightedQuickUnionUF.union(wufPositionTarget,wufPositionSource);
                    }
                }

                // check the left
                if(j > 0){
                    p = i;
                    q = j-1;
                    wufPositionTarget = (q) + (service.gridSize  * p) + 1;
                    if(service.isOpen(p,q) &&  !WeightedQuickUnionUF.connected(wufPositionTarget,wufPositionSource)){
                        //console.log("Union (" + wufPositionSource + ", " + wufPositionTarget + ")");
                        WeightedQuickUnionUF.union(wufPositionTarget,wufPositionSource);
                    }
                }
				
				}				
			
			},
			
			
			// is site (row i, column j) open?
			isOpen: function(i, j){
				return service.grid[i][j] == 1;
			},

			// is site (row i, column j) full?
			isFull: function(i, j){
				//console.log("isFull: " + i + ", " + j);
				return service.grid[i][j] == 0;
			},

			// does the system percolate?
			percolates: function(){
				lastSpot = service.gridSize * service.gridSize + 1;
				return WeightedQuickUnionUF.connected(0,service.gridSize * service.gridSize + 1);
			},

		
			getGrid: function(){
				return service.grid;
			},
			
			printGrid: function() {

				console.log("---------- Grid ----------");

				numOpen = 0;

				for (var i = 0; i < service.grid.length; i++) {
					var output = "";
					for (var j = 0; j < service.grid[i].length; j++) {
						output += service.grid[i][j] + " ";
						if(service.grid[i][j] == 1){
							numOpen++;
						}
					}
					console.log(output);
				    console.log("");
				}

			},
			
			getNumberOfOpenSpaces: function() {
				var numberOpen = 0;
				for (var i = 0; i < service.grid.length; i++) {
					for (var j = 0; j < service.grid[i].length; j++) {
						if(service.grid[i][j] == 1){
							numberOpen++;
						}
					}
				}
				return numberOpen;
			}
			
			
			
			
        };

        return service;

    }
]);

