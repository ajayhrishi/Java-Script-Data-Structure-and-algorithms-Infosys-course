function Queue(){
    this.PatientQueue = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.listout = listout;
    
}

function Patient(name,priority){
    this.name = name;
    this.priority = priority;
}

function enqueue(element){
    this.PatientQueue.push(element);
    console.log(`Patient: ${element.name}, Emergency Code:${element.priority}, came to the queue`);
}

function front(){
    return `Patient at First: ${this.PatientQueue[0].name}`;
}

function back(){
    return `Patient at last: ${this.PatientQueue[this.PatientQueue.length-1].name}`;
}

function listout(){
    for(let i = 0; i<this.PatientQueue.length; i++){
        console.log(this.PatientQueue[i].name, " ",this.PatientQueue[i].priority )
    }
}

function dequeue(){
    var priority = 0;
    for (let i = 0; i<this.PatientQueue.length; i++){
        if(this.PatientQueue[i].priority > this.PatientQueue[priority].priority){
            priority = i;
        }
    }

    return this.PatientQueue.splice(priority,1);
}




console.log("Everything seems to be fine so far");

let p = new Patient("Ajay", 5);
let queue = new Queue();
queue.enqueue(p);

p = new Patient("Luffy", 3);
queue.enqueue(p);

p = new Patient("Naruto", 4);
queue.enqueue(p);

p = new Patient("Asuma Sarutobi", 6);
queue.enqueue(p);

p = new Patient("Sakura", 2);
queue.enqueue(p);

p = new Patient("Saske Uchiha", 2);
queue.enqueue(p);

p = new Patient("Minato Namikaze", 7);
queue.enqueue(p);

p = new Patient("Kushina Uzumaki", 7);
queue.enqueue(p);
console.log("The enqueue and patient functions are working fine. Now need to treat the patients based on their emergency level");
queue.listout();

console.log(" ");
let treated = queue.dequeue();
console.log(`treated patient \nName:${treated[0].name} \nEmergency Level:${treated[0].priority} \n\nRemaining Patients`);
queue.listout();

console.log(" ");
treated = queue.dequeue();
console.log(`treated patient \nName:${treated[0].name} \nEmergency Level:${treated[0].priority} \n\nRemaining Patients`);
queue.listout();

console.log(" ");
treated = queue.dequeue();
console.log(`treated patient \nName:${treated[0].name} \nEmergency Level:${treated[0].priority} \n\nRemaining Patients`);
queue.listout();

console.log(" ");
treated = queue.dequeue();
console.log(`treated patient \nName:${treated[0].name} \nEmergency Level:${treated[0].priority} \n\nRemaining Patients`);
queue.listout();

console.log(" ");
treated = queue.dequeue();
console.log(`treated patient \nName:${treated[0].name} \nEmergency Level:${treated[0].priority} \n\nRemaining Patients`);
queue.listout();

console.log(" ");
treated = queue.dequeue();
console.log(`treated patient \nName:${treated[0].name} \nEmergency Level:${treated[0].priority} \n\nRemaining Patients`);
queue.listout();


console.log(" ");
treated = queue.dequeue();
console.log(`treated patient \nName:${treated[0].name} \nEmergency Level:${treated[0].priority} \n\nRemaining Patients`);
queue.listout();


console.log(" ");
treated = queue.dequeue();
console.log(`treated patient \nName:${treated[0].name} \nEmergency Level:${treated[0].priority} \n\nRemaining Patients`);
queue.listout();



