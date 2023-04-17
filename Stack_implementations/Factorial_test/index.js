function Stack(){
    this.contents = [];
    this.top = 0;
    this.push = push;
    this.peek = peek;
    this.pop = pop;
    this.clear = clear;
    this.length = length;
}


function push(element){
   this.contents[this.top++]= element;
}
function peek(){
    return this.contents[this.top-1];
}

function pop(){
    return this.contents[--this.top];
}

function clear(){
    this.top =0;
}
function length(){
    return this.top;
}

function factorial(number){
    let c = new Stack();
    for (let q =1; q<=number ; q++)
    {
        c.push(q);
    }
    let fac=1;
    while(c.length()>0)
    {
        fac *= c.pop();
    }
    console.log(fac);
}

factorial(5);