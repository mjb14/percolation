
function shuffle(array) {
  var currentIndex = array.length
    , temporaryValue
    , randomIndex
    ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function Node(item) {
	if(item) {
		this.item = item;
	} else {
		this.item = null;
	}
    this.next = null;
}
 
Node.prototype.setNext = function(node) {
    this.next = node;
};

Node.prototype.setItem = function(item) {
    this.item = item;
};

function ListIterator() {
	this.current = null;
}

ListIterator.prototype.setCurrent = function(n) {
	this.current = n;
}

ListIterator.prototype.hasNext = function() {
	return (this.current != null);
}

ListIterator.prototype.next = function() {
	item = this.current.item;
	this.current = this.current.next;
    return item;
}



angular.module('modules.LinkedList', []).factory('LinkedList', [ 
    function() {
        
		
		
        var service = {
			first: null,
			last: null,
			listSize: 0,
			size: function() {
				return service.listSize;
			},
			init: function(N) {
					service.listSize = 0;
					service.first = null;
					service.last = null;
			},
			addFirst: function(item) {
				service.listSize++;
				n = new Node(item);
				if(service.first == null){
					service.first = n;
					service.last = n;
				} else {
					original = service.first;
					service.first = n;
					service.first.next = original;
				}
				
			},
			addLast: function(item) {
				service.listSize++;
				n = new Node(item);
				if(service.first == null){
					service.first = n;
					service.last = n;
				} else {
					original = service.last;
					service.last = n;
					original.next = service.last;
					
				}
			},
			
			removeFirst:function() {
				if(service.first != null){
					service.first = service.first.next;
					service.listSize--;
					if(service.size() == 0){
						service.last = null;
					}
				}
			},
			
			removeLast: function() {
				if(service.first != null){
					
					service.listSize--;

					if(service.first.next == null){
						service.first = null;
						service.last = null;
						return;
					}
					
					next = new Node();
					current = service.first;
					
					if( current.next == service.last ){
						current.setNext(null);
						service.last = current;
					} else {
						for(i = 1; i <= service.size(); i++){
							next = current.next;
							if(next.next == null) {
								current.next = null;
								service.last = current;
							}
							current = next;
						}
					}
				}
			},
			
			getFirst: function() {
				return service.first;
			},
			
			getLast: function() {
				return service.last;
			},
			
			// random number between 1 and size of list
			getRandomNumber: function() {
				return Math.floor((Math.random() * service.size()) + 1);
			},
			
			sample: function() {
					if (service.size() == 0) {
						return;
					}
					current = new Node();
					current.item = service.first.item;
					current.next = service.first.next;
					
					next = new Node();
					
					r = service.getRandomNumber();
					for(i = 2; i <= r; i++){
						next = current.next;
						current = next;
					}
					return current.item;
			},
			
			iterator: function() {
				i = new ListIterator();
				i.setCurrent(this.first);
				return i;
			},
			
			randomIterator: function() {
				i = new ListIterator();
				var items = [];
				
				current = new Node();
				current.item = service.first.item;
				current.next = service.first.next;

				// build our array
				for(var x = 0; x < service.size(); x++){
					item = new Node();
					item.item = current.item;
					items.push(item);
					current = current.next;
				}

				// shuffle the array
				shuffle(items);
				
				// loop over array and connect items
				var itemsLength = items.length;
				var lastPos = itemsLength -1;
				for(var x = 0; x < itemsLength; x++) {
					if(x != lastPos) {		
						items[x].next = items[x+1];
					} else {
						items[x].next = null;
					}
				}
				
				i.setCurrent(items[0]);
				return i;
			}
			
        };

        return service;

    }
]);

