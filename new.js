//  console.log("hello world");
//  alert("allow me");
// console.warn("this is warning")
// console.error("this is an error")
//  document.write("hello everyone how are you!")

//variables in js


// let a = "dhjdbs";
// //   a = 67;
 
//  console.log(a);
// var b = 34;
// console.log(a)

//  var str = "hii";
// var marks = {
//     sam: 95,
//     raj: 78,
//     rahul: 67
// }
//  console.log(marks);

// var u;
//  console.log(und);
// console.log(typeof und);
//  var n ;
//  console.log(n);
//  console.log(typeof n);

//  let n = null;
//  console.log(n===u);
// console.log(n);
// console.log(typeof n);

// var arr = [1,2,"sam",3,4];
// console.log(arr);

//operators in js-

// let a = 38;
// var b = "shsj";
// console.log("tha value of a + b is",a+b);
// console.log(a == b);

// function in js

// function avg(a,b)
// {
//    return (a+b)/2;
   
// }
//  console.log(avg(10,2));

// DRY: do not repeat yourself

// c = avg(81,34);
//  c2 = avg(14,16);
// console.log(c);

// conditional statement 

// var a = 27;
// if(a > 18) {
//     console.log('you are an adult');
// }
// else{
//     console.log('you are not an adult');
// }

// for each loop

// var arr = [6,4,8,9,2];
// arr.forEach(function(element){
//     console.log(element);
// })
// 

//array methods :

// let myArr = ["man", "cam", 72, 87, 215,5382, null, true];
//  console.log(myArr);
// console.log(myArr.length);
//  myArr.pop();
//  console.log(v);
//  myArr.push("sam");
// console.log(myArr);
//   myArr.shift();
//  console.log(c);
//  let b = myArr.unshift("hello");
//  console.log(b);
//  console.log(myArr.toString());
// console.log(myArr.sort()); // sorting is done as dictionary basis
// myArr.splice(0,0,"jam"); // (position,how many element to be removed,element)
//  console.log(myArr);
// let ar = myArr.slice(2); // (position from where it should be sliced in new array)
// console.log(ar);
// myArr.reverse();
// console.log(myArr);

// STRING METHODS IN JS

// let str = 'hii guys how are you how how';
//   console.log(str.length);
//   console.log(str.indexOf(""));
// console.log(str.lastIndexOf("how"));
// console.log(str.slice(0,4)); // (start,end(n-1))
// console.log(str.replace("how","why"));

// DATES IN JS

// console.log(new Date());

//methods of date 
// myDate = new Date();
// console.log(myDate.getTime()); // shows time in seconds
// console.log(myDate.getMinutes()); 
// console.log(myDate.getFullYear());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.getDate());
// console.log(myDate.getDay()); // count from sunday as 0

// DOM manipulation :    (DOM-Documents)

//  let elem = document.getElementById("click");
// console.log(elem.style.border="2px solid blue");

//  let classElem = document.getElementsByClassName("container");
//  console.log(classElem);

// classElem[0].style.background="green";
// classElem[0].classList.add("bgprime");
// classElem[0].classList.add("text-success");
//  classElem[0].classList.remove("text-success");
// console.log(classElem.innerHTML);
//  console.log(classElem.innerText);
// console.log(classElem.innerHTML);
//  console.log(classElem[0].innerText);

//  tn = document.getElementsByTagName("div");
//   console.log(tn);
  
//  createdElement = document.createElement('p');
//  tn[1].appendChild(createdElement);
// createdElement.innerText = "This is a created para";
 
//  createdElement2 = document.createElement('b');
//  createdElement2.innerText = "This is a created bold";
//  tn[1].replaceChild(createdElement2, createdElement);

// selecting using query 

//  sel = document.querySelector('.container'); // shows first cotainer
//  console.log(sel);
//   sel = document.querySelectorAll('.container'); // shows all conatiner
//   console.log(sel);


// EVENTS in js : 


// window.onload = function (){
//     console.log("the document was loaded");
// }

// secondContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[0].innerHTML = "<b> We have clicked</b>"
//     console.log("clicked on firstContainer");
//  })

// function clicked(){
//     console.log("the button was clicked");
// }

// firstContainer.addEventListener('mouseover', function(){
//     console.log("mouse is on firstContainer");
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("mouse is out of firstContainer");
// })

//  let prevHTML =  document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//      document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("mouse up when clicked on firstContainer");
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("mouse down when clicked on firstContainer");
// })

// Arrow Function

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(5,8));

// sum = (a,b) => {
//     return a+b;
// }

// m = 64;
//  get = ()=> {         // this can be used
//     return this.m;    
// }
//  console.log(get());

// function car(color){
//     this.color = color;         // can create a constructor
// }
// const redCar = new car('red');
// console.log(redCar);



// sum = (a,b)=>{
//     return a+b;
// }
// console.log(sum(6,9));

// setTimeout and setInterval:

// doLog = ()=>{
//     console.log("i am your log");
// }
// setTimeout(doLog, 2000); // (function,time in millisecond)
// setInterval(doLog, 2000); 

// to stop this

// clr = setInterval(doLog, 2000);
// clearInterval(clr); // use this in console to stop both setTimeout and setInterval
//  clearTimeout();

// localStorage in js: (it helps to save the data in computer)

// localStorage.setItem('name', 'sam');
// localStorage    // (use this in console to see storage)
//  localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear();

// JSON : java script object notation(it is used to convert js object to string and vice versa)

// obj = {name:"sam",dep:"senior", a:{this:'tha"t'}};  // (JSON does not support ' ' only " " )
//    console.log(obj);
//  jso = JSON.stringify(obj);
//  console.log(typeof jso);
//  console.log(jso);
//  pars = JSON.parse('{"name":"sam","dep":"senior","a":{"this":"that"}}');
//  console.log(pars);

// Template literals - backticks

// a = 45;
// console.log(`this is my ${a}
// how are you`);
// str1 = "hey";
// str2 = "you";
// console.log(str1 + "\n" + str2);