
angular.module('modules.WeightedQuickUnionUF', []).factory('WeightedQuickUnionUF', [
    function() {
        
        var service = {
			id: [], // id[i] = parent of i
			sz: [], // sz[i] = number of objects in subtree rooted at i
			count: 0, // number of components
			
			/**
			 * Initializes an empty union-find data structure with N isolated components 0 through N-1.
			 * @param N the number of objects
			 */
			init: function(N){
				//console.log("WeightedQuickUnionUF.init(" + N + ")");
				service.count = N;
				for (var i = 0; i < N; i++) {
					service.id[i] = i;
					service.sz[i] = 1;
				}
				return service;
			},
			
			getArray: function() {
				return service.id;
			},
			
			/**
			 * Returns the number of components.
			 * @return the number of components (between 1 and N)
			 */
			getCount: function() {
				//console.log("WeightedQuickUnionUF.getCount()");
				return service.count;
			},
			
			/**
			 * Returns the component identifier for the component containing site <tt>p</tt>.
			 * @param p the integer representing one site
			 * @return the component identifier for the component containing site <tt>p</tt>
			 */
			find: function(p) {
				//console.log("WeightedQuickUnionUF.find(" + p + ")");
				while (p != service.id[p])
				p = service.id[p];
				//console.log("p:", p);
				return p;
			},
			
			/**
			* Are the two sites <tt>p</tt> and <tt>q</tt> in the same component?
			* @param p the integer representing one site
			* @param q the integer representing the other site
			* @return <tt>true</tt> if the two sites <tt>p</tt> and <tt>q</tt>
			*    are in the same component, and <tt>false</tt> otherwise
			*/
			connected: function(p, q) {
				//console.log("WeightedQuickUnionUF.connected(" + p + ", " + q + ")");
				return service.find(p) == service.find(q);
			},
			
			/**
			* Merges the component containing site<tt>p</tt> with the component
			* containing site <tt>q</tt>.
			* @param p the integer representing one site
			* @param q the integer representing the other site
			*/
			union: function(p, q) {
				rootP = service.find(p);
				rootQ = service.find(q);
				if(rootP == rootQ) return;

				// make smaller root point to larger one
				if   (service.sz[rootP] < service.sz[rootQ]) { 
					service.id[rootP] = rootQ; 
					service.sz[rootQ] += service.sz[rootP]; 
				}
				else { 
					service.id[rootQ] = rootP; 
					service.sz[rootP] += service.sz[rootQ]; 
				}
				service.count--;
			}	

        };

        return service;

    }
]);


