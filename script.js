console.log('This is external JS');
let name='sanjana';
const city='Mysuru';
const year=2026;
console.log(name, city, year);

//funtions
//function declaration
function greet(name){
    console.log('Hello!!'+name);
}
greet();
const add=function(a,b){
    return a+b;
}
console.log(add(25,25))
//arrow function
const greeting = (names)=>{
    return 'Hi'+names;
};
console.log(greeting('sanjana'));
const p=document.getElementById('text');
//p.textContent='Updated Text';
p.innerHTML = '<b>Updated Text</b>'