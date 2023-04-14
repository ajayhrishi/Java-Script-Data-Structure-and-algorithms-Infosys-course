console.log("Testing the palindrome here.");

function Stack(){
   this.content = [];
   this.top= 0;
   this.push = push;
   this.pop = pop;
   this.peek = peek;
}

function push(word){
  this.content[this.top++]= word;
    
}

function peek(){
    return this.content[this.top-1];
}

function pop(){
    return this.content[--this.top];
}

var c = new Stack();

function isPalindrom(word)
{
  for(let q=0; word.length>q;++q){
    c.push(word[q]);
  }


  var reversed = "";
  while(word.length>0){
    reversed += c.pop();
    console.log(word[q]);
  }
  console.log(`The actual word: ${word}`);
  console.log(`Reversed word: ${reversed}`);
  if (word==reversed){return true;} else {return false;}
}

isPalindrom("Ajay");