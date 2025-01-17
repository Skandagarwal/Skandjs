console.log('Namaste Dunia');
const rec={
    length:20,
    breadth:10,

    draw: function(){
        console.log('Drawing');
    }
};


// FACTORIAL FUNCTION

//  function createRectangle(len,bre){

//     let rectangle={
//         length: len,                        //Property
//         breadth: bre,                       //Property
//         draw: function(){                   //Method
//             console.log('Drawing');
//         }
//     };
//     return rectangle;

//  }
// let rec = createRectangle(3, 2);
// let rec2 = createRectangle(13,21);
 
// CONSTRUCTOR FUNCTION
 
// function Rectangle(){
//     this.length= 4,
//     this.breadth= 5,
//     this.draw = function(){                   //Method
//             console.log('Drawing');
//     }
// }
// let rectangleconfun= new Rectangle();

// rectangleconfun.name='xyz';
// console.log(rectangleconfun);

// delete rectangleconfun.name; 
// console.log(rectangleconfun);

// REFERANCE TYPE(they are copied by there address/refrence)

// let a={value:10};
// let b=a;

// a.value++;
// console.log(a.value);
// console.log(b.value);


// PRIMITIIVE TYPE(they are copied by there value) 

// let a=10;
// let b=a;

// a++;
// console.log(a);
// console.log(b);

// let rectangle={
//     length:10,
//     breath:20
// };
// for-in loop
// for(let key in rectangle ){
//     // key are reflected through key variable
//     // values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }

// if('color' in rectangle){
//     console.log('Present');
// }
// else{
//     console.log('Absent');
// }


// OBJECT CLONING
// #1

// let src={
//     a:10,
//     b:20,
//     c:30
// };
// let dest={};
// for(let key in src){
//     dest[key]=src[key];
// }
// console.log(dest);
// src.a++;
// console.log(dest);

// #2
// let src={
//         a:10,
//         b:20,
//         c:30
// };
// let src2={value:100};
// let dest= Object.assign({},src,src2);
// console.log(dest);
// src.a++;
// console.log(dest);

// #3
// let src={
//         a:10,
//         b:20,
//         c:30
// };
// let dest={...src};
// console.log(dest); 
// src.a++;
// console.log(dest);




