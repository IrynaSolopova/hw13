console.log("hello world");

var myNum = 10;

var myStr = "строка";

var myBool = true;

var myArr = [1, 2, 3, 4, 5];

var myObj = {
  first: "First Name",
  last: "Last Name",
};



var decimal2 = myNum;
console.log(decimal2.toFixed(2));

var i = 10;
console.log(++i);
console.log(--i);
console.log(i++);
console.log(i--);

var myTest = 20;

myTest += myNum;
console.log("+=", myTest);

myTest -= 10;
console.log("-=", myTest);

myTest *= 2;
console.log("*=", myTest);

myTest /= 2;
console.log("/=", myTest);

myTest %= 4;
console.log("%=", myTest);

console.log(Math.PI);
console.log(Math.round (89.279));
console.log(Math.random()*10);
console.log(Math.pow(3,5));