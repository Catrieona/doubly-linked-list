const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._tail = null;
        this._head = null;
    }

    append(data) {


        var node= new Node(data)
        if (this._head === null) {
            this._head = node; 
            this._tail =  node; 
            
            
        } else {
            this._tail.next = node;
            node.prev=this._tail
            this._tail=node 
            
            
        }
        this.length++;
        return this

    }

    head() {
        return this._head.data ;
    }

    tail() {
        return this._tail.data ;
    }

    at(index) {
        var curent=this._head
        for (var i = 0; i <= index; i++) {
        	if(index===i){
        		return curent.data
        	}else{
        		curent = curent.next;}
        }
    }


    insertAt(index, data) {

    if (index > this.length)
    throw new Error("Error");

        
    var node=new Node(data)
    	
    	 	
    	if(index==0){
    		if(!this._head){
    			this._head = node;
    			return;
    		} else {
    			node.next=this._head;
    			this._head.prev=node;
    			this._head=node;
    			return;
    		}
    	} else if (index==this.length){
	    	this._tail.next=node;
	    	node.prev=this._tail;
	    	this._tail=node;
	    	return;
    	} else {
    		var curent = this._head;
          	for (var i=0; i<index-1; i++){
        	curent = curent.next;
    		}
			node.next=curent.next;
			node.prev=curent;
			curent.next=node;
			node.next.prev=node;
		}
		this.length++;
		return this;
			    

    }

    isEmpty() {
        if (this.length==0){
            return true
        } else {
            return false
        }
    
    }

    clear() {
        for (let i = this.length - 1; i >= 0; i--){
            this.deleteAt(i)
        }
        return this;
    }

    deleteAt(index) {

        if (this.length <= 0 || index < 0 || index >= this.length)
        throw new Error("Error")
        
        var curent

        if (index == 0){
            if(this.length==1){   
                this._head=null;
                this._tail=null;
                this.length--;
                 return this;
            } else {    
                this._head=this._head.next;
                this.length--;
                return this;
            }
        } else {
            curent=this._head;
            for(var i=0; i<index-1; i++)
            {curent=curent.next}
            curent.next=curent.next.next;
            curent.next.next.prev=curent;
            this.length--;
            return this;
        
        }
    }

    reverse() {
    	 
    	
    	var curent=this._head
    	for(var i=0; i<this.length; i++){
    		
    		var tmp=curent.prev;
    		curent.prev=curent.next;
    		curent.next=tmp;
    		curent=curent.prev;
    	}

    	var cur=this._tail;
    	this._tail=this._head;
    	this._head=cur; 
    	return this;

    }

    indexOf(data) {
    	var curent=this._head
    
	    if (this.length>1){
	    	for(var i=0; i<this.length; i++){
	    		if(curent.data===data){
	    			return i
	    		} else {
	    			curent=curent.next
	    		}

	    	}
	    }	 	
	 	return -1
	}

	
}



module.exports = LinkedList;
