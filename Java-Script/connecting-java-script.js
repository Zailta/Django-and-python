// alert("welcome to your bank")
// var deposit =  prompt("how much do you want to add in your account")
// alert("you have deposited"+deposit)
// console.log("you are a cool person")
// alert("enter the weight in lbs")
// var lb = prompt("please eneter a number for conversion")
// var kg = lb*0.453592
// alert("The conversion amount in KGs is "+kg)
// console.log("conversion complete")
// var x = 0
// word ="hello"
// while(x< word.length){
//   console.log(wor[i])
//   x = x+1
//
// }
// for(var i =0; i<5; i++){
//   console.log("hello");
// }
// for(var i =1; i<=25; i++){
//   if(i%2 != 0){
//     console.log(i);
//   }
// }





// assesment project
// var first = prompt("Enter Your First Name")
// var last = prompt("Enter Your Last Name")
// var age = prompt("Enter Your Age")
// var height = prompt("Enter Your height")
// var pet_name = prompt("Enter Your Pet-Name")
// if((first==last) && (age>20 && age<30) && (height== 170) && (pet_name[pet_name.length-1]=== "y")){
//   alert("spy detected")
// }
// else {
//   alert("you got the wrong guy")
// }


//Data structures and functions
//assesment 1- arrays, loops, switch case:

// var roster = [];
// function addNew(){
//   var name = prompt("What is it that you want")
//   roster.push(name);
// }
// function remove(){
//   var remove = prompt("What is it that you want to remove")
//   var index = roster.indexOf(remove)
// }
//
// function display(){
//   console.log(roster);
// }
// do {
//
// var start = prompt("Please enter your choice")
// switch(start) {
//   case 'add':
//     addNew()
//     break;
//   case 'remove':
//     remove()
//     break;
//     case 'display':
//       display()
//       break;
//   default:
//     alert("Not a valid input")
//     break;
// }
// } while (start !== 'quit');

var object = {
  name: "Mohammad Mannan"
  age:31
employee: "programmer"
method: function(){
  alert(this.name)
}
namelength: function(){
  alert(this.name.length)
}
lastname: function(){
  alert(this.name.split(" ")[1])

}
}
