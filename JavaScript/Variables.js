// const getDog = {
//     eat: function (){
//         console.log("eat meat");
//     },
//     bark(){
//         console.log("woof");
//     }
// };
// console.log(getDog);

// const anotherDog = {
//     name:"jack",
//     age:8,
//     breed:"bulldog",
//     eat:function(){
//         console.log("eat meat");
//     },
//     bark(){
//         console.log('woof');
//     },
// };
// console.log(anotherDog);  

// function getDog(name, age, breed){
//     return{
//         name,
//         age,
//         breed,
//         eat: function(){
//             console.log("eats meat");
//         },
//         bark(){
//             console.log("woof");
//         },
//     }
// }

// const anotherDog = getDog("jack", 5, "bulldog");

// console.log(anotherDog);

// function Dog(name, age, breed){
//     // this{}
// this.name = name;
// this.age  = age;
// this.breed  = breed;
// this.eat = function(){
//     console.log(this.name + "eats meat")
// };
// this.barks = function(){
//     console.log(this.name, " barks: woof woof");
// };

// }

// const anotherDog = new Dog("jack", 13, "GermanSheaperd");

// console.log(anotherDog);

// const person = {
//     name:"nahom"
// }
// person.favoriteFood = "injera";
// person["favoriteIceCream"] = "chocolate";
// delete person.favoriteFood;
// person.eat = function(){
//     console.log("start eating");
// };
 
// console.log(person);


// let employee = [
//     {id:1, name:"Roba"},
//     {id:2, name:"Nati"},
//     {id:3, name:"Nahom"}
// ];

// const locateEmployee = employee.find(function(e){
//     return e.name === "Nati"
// });

// console.log(locateEmployee);


// let numbers = [1,2,3,4,5,6];

// const deleteArray = numbers.splice(0, numbers.length);
// console.log(numbers);

// let numbers = [
//     {id:3, name:"roba"},
//     {id:1, name:"nahom"},
//     {id:2, name:"nati"}
// ];

// let sortEmployee = numbers.sort((a,b) => {
//     const lowerCaseA = a.name.toLowerCase();
//     const lowerCaseB = b.name.toLowerCase();

//     if(lowerCaseA > lowerCaseB){
//         return -1;
//     }
//     if(  lowerCaseB> lowerCaseA){
//         return 1;
//     }
//     return 0;
// });
// console.log(sortEmployee);

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// const checkEvenNumbers = numbers.every((number)=>number%2===0);
// console.log(checkEvenNumbers);

// let employees  = [{
//     id:1,
//     name:"Blah ",
//     Email:"Rodjh@gamil.com"
// },
// {
//     id:1,
//     name:"Efgk",
//     Email:"Afjh@gmail.com"
// },
// {
//     id:1,
//     Email:"Ti@gamil.com",
//     name:"Gou",
// }];

// const updatedArray = employees.map((employee)=>({
//     ...employee,
//     Email:employee.Email.toLowerCase(),
// }));
// console.log(updatedArray);

// let numbers = [1,2,3,4,5];
// sum = 0; 
// for(let num of numbers){
//     sum+= num;
// };
// console.log(sum);


// const numbers =[1,2,3,4,5];

// const sum = numbers.reduce((acc, num) => acc + num, 0);

// console.log(sum);  


// function multiple(num1, num2){
//     console.log(arguments)
//     return num1 * num2
// }

// console.log(multiple(45, 33))


// const sum = (...arg) => {
//     return arg.reduce((acc, num) => acc + num, 0);
// };
// console.log(sum(1,2,3,4,5,6,7,8,9,10));

// function writeCode(language){
//     console.log(`i am studying  ${language}`);
// };

// writeCode("python");
// writeCode("c++");

// function login(user = "guest"){
//     console.log(`hi ${user}`, ", how are you?");
// };
// login();

try{
    const result = 10/2;
    let number = undefinedNumber ;
}catch (error){
    console.log(error.message, " error")
}





