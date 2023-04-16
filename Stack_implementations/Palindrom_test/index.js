function Stack(){
  this.contents= [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.clear = clear;
  this.peek = peek;
  this.length = length;
}

function push(word){
  this.contents[this.top++]= word;
}

function pop(){
 return this.contents[--this.top];
}

function peek(){
  return this.contents[this.top-1];
}
function clear()
{
  this.top = 0;
}

function length(){
  return this.top;
}

function isPalidrom(word)
{
  var g = new Stack();
  for (let z = 0; z<word.length; z++)
  {
    g.push(word[z]);
  }

  var reversed= "";
  while(g.length()>0)
  {
    reversed += g.pop();
  }

  if(reversed == word)
  {
    return true;
  }
  else
{return false;}
}

let word = "malayalam";
if(isPalidrom(word))
{
  console.log(word+" is a palindrome");
}

else
{
  console.log(word+" is not a palindrome");
}