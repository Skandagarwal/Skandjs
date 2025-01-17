console.log('holle jiii');

// let lastName = 'Agarwal';

// let firstName = new String ('Skand');

// let message = `Skand is a good boy 
// live in rampur
// thank you`;
// console.log(message);


// ARRAYS::

// let numbers=[2,5,7,4];
// console.log(numbers);


// // SEARCHING:

// console.log(numbers);
// console.log(numbers.indexOf(3));

// // to check the number exist in array 
// console.log(numbers.includes(4));

// let courses=[
//     {no:1, naam:'skand'},
//     {no:2, naam:'agarwal'}
// ];
// // console.log(courses);

// // let course = courses.find(function(course){
// //     return course.naam == 'agarwal';
// // })
// let course = courses.find(course => course.naam == 'agarwal');
// console.log(course); 


// REMOVING ELEMENT:

// let num=[1,2,3,4,5,6,7];
// //end
// num.pop();
// //biginning
// num.shift();
// //middle
// num.splice(2,1);
// console.log(num);


// EMPTYING AN ARRAY:

// let num=[1,2,3,4,5];
// let num2=num;
// // num.length=0;
// // num.splice(0,num.length);


// console.log(num);
// console.log(num2);


// COMBINE & SLICING ARRAYS

// let first=[1,2,3,4];
// let second=[5,6,7,8];

// let combine=first.concat(second);
// console.log(combine);

// let marks=[10,20,30,40,50,60,70,80];
// let sliced=marks.slice(2,6);
// console.log(sliced);

// let skand=[90,70,100,99];
// let scondmarks=sliced.concat(skand);
// console.log(scondmarks);

// let first=[1,2,3,4];
// let second=[5,6,7,8];
// let combine=[...first, ...second];
// console.log(combine);


// ITERATION AN ARRAY

// let arr=[10,20,30,40,50];

// // for(let value of arr){
// //     console.log(value);
// // } 


// // arr.forEach(function(number) {
// //     console.log(number);
// // });
// //        OR   by callback function 
// arr.forEach (number => console.log(number)) ; 


//JOINING AN ARRAY

// let number=[20,10,30,40,50];
// let joined=number.join('-');
// console.log(joined);

// let message='this is my first message';
// let parts=message.split(' ');
// console.log(parts);

// let joined=parts.join('_');
// console.log(joined);


// SHORTING ARRAY

// let number=[90,20,10,50,60];
// number.sort();
// console.log(number);

// number.reverse();
// console.log(number);


// FILTERING ARRAY

// number=[1,2,3,-1,-2];
// let filter= number.filter(value => value >=0);
// console.log(filter);



// MAPPING ARRAY

let number=[1,2,3,4,5,6,7,8,9];;


let items= number.map(value =>'roll_no.'+value);
console.log(items);