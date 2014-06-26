'use strict';

/* Services */

angular.module('myApp.services', ['modules.Percolation', 'modules.WeightedQuickUnionUF', 'modules.LinkedList']).
  value('version', '0.1');
