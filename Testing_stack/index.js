function stack(){

  this.content = [];
  this.top = 0;
  this.push = push;
  this.pop= pop; 
  this.peek = peek;
  this.clear = clear;
  this.length = length;

}
function push(element){
   this.content[this.top++]= element;
}

function peek(){
   return this.content[this.top-1];
}

function pop(){

    return this.content[--this.top];
}

function clear(){
 this.top=0;
}

function length(){
    return this.top;
}

var s = new stack();
s.push("Ajay Hrishi");
s.push("Jacob");
s.push("John marker");
s.push("Herold");

console.log("length of the stack is:"+s.length());