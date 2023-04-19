function Queue(){
    this.Content = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back; 
    this.clear = clear;
    this.Output = Output;}

function enqueue(element){
 this.Content.push(element);}

function dequeue(){
    this.Content.shift();}

function front(){
    return `The first element is ${this.Content[0] }`;}

function back(){
    return `The last element is ${this.Content[this.Content.length - 1]}`;}

function clear(){
    this.Content= [];
}

function Output(){
    var c = "";
    for(let i=0;i<this.Content.length;i++)
    {
        c +=this.Content[i]+"\n";
    }
    return c;
}

console.log("everything working fine so far");

var b = new Queue();
b.enqueue("Ajay Hrishi V");
b.enqueue("Rock lee");
b.enqueue("Naruto Uzumaki");
b.enqueue("Tangiro Kamado");
b.enqueue("Kakashi Hatake");
b.enqueue("Saske Uchiha");
b.enqueue("Monkey De Luffy");
b.enqueue("Ittachi Uchiha");
b.enqueue("Madara Uchiha");
b.enqueue("Obito Uchiha");
b.enqueue("Asuma Sarutobi");
b.enqueue("Kohnahamru Sarutobi");
b.enqueue("Boruto Uzumaki");
b.enqueue("Kushina Uzumaki");
console.log(b.Output());

console.log("Code is working with the enqueue and Output functions. Now testing the others");

b.dequeue();
b.dequeue();
b.dequeue();
console.log(b.Output());

console.log("The Dequeue function is also working. Now I can remove the last element in the line");

console.log(b.front());
console.log(b.back());

console.log("The front and back functions are also seems to be working fine now");