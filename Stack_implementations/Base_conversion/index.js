console.log("Hellow there!!!!");


function Stack()
{
    this.inputs= [];
    this.top = 0;
    this.push= push;
    this.peek = peek;
    this.length= length;
    this.pop = pop;
    this.clear = clear;
}

function push(element){
    this.inputs[this.top++]= element;
}
function length(){
    return this.top;
}
function pop(){
    return this.inputs[--this.top];
}

function peek(){
    return this.inputs[this.top-1];
}
function clear(){
    this.top =0;
}

function toFindBase(first, second){
    let c = new Stack();
    do{
        c.push(first % second);
        first = Math.floor(first / second);
    }while(first>0);

    let newvalue = "";
    while(c.length()>0){

        newvalue += c.pop();
    }
    return newvalue;
}
let x = 900;
let y = 23;
let z = toFindBase(x,y);
console.log("the new value of ",x," and ",y," is ", z);