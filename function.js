console.log('Skand');


// Function call
// function run(){
//     console.log('Hello jiii');
// };
// run();

// // Function assignment
// let stand = function walk(){
//     console.log('hey');
// };
// stand();

// function sum(){
//     let total =0;
//     for(let value of arguments)
//         total = total + value;
//         return total;
// }

// console.log(sum(10,70,80,90,100));


// REST OPERATOR

// function sum(a,b,...abc){
//     console.log(abc);
// }
// sum(1,2,3,4,5);


// DEFAULT PARAMETER

// function interst(p,r=5,y=10){       // DEFAULT PARAMETER
//     return p*r*y/100;
// };
// console.log(interst(1000,6,15));
// console.log(interst(1000,undefined,15));   //bad practice




// let person={
//     fName : 'Skand',
//     lName : 'Agarwal',
//     get fullName(){
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value){
//         if(typeof value !== String ){
//             throw new Error("You have not send a string");
//         }
//         let part= value.split(' ');
//         this.fName=part[0];
//         this.lName=part[1];
//     }
// };

// console.log(person)

// person.fullName='Anushka Kapoor';

// console.log(person.fullName)


// try{
//     person.fullName= true;
// }
// catch(e){
//     alert(e);
// }

// console.log(person.fullName)

let arr=[1,2,3,4,5]
let total=0;
for(let value of arr)
    total=total+value;

console.log(total);
    
