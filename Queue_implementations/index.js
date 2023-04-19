function Queue(){
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = font;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    }
    
    // adding element to the queue. 
    function enqueue(Element){
    this.dataStore.push(element);
    }
    // removing element from the queue. 
    function dequeue(){
    return this.dataStore.shift();
    }
    
    function front(){
    return this.dataStore[0];
    }
    
    function back(){
    return this.dataStore[this.dataStore.length -1];
    }