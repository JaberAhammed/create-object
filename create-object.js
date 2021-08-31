/* 1 using object literal */

const student = {
    name:'jaber',
    job :'kicona'
};

/* 2 using object constructor */

// const person = new Object();

/* 3 using object constructor */

// const human = Object .create(null)
// const human = Object .create(student)

/* console.log(human.job); */


/* 4 using object shogar  */

// class People {
//   constructor (name,age, job)  {
//       this.name = name;
//       this.age = age;
//       this.job = job;
//   }
// }
// const peop = new People('Manus',12);
// console.log(peop);

/* 5 using object function  */
function Manus(name){
    this.name =name;
}
const man = new Manus ('kader');
console.log(man);