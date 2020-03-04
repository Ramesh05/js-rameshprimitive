//object strng number boolean //
//STRINGS METHODS//
let a='hello';
//returns length of the string
//output :5
console.log(a.length)
let b='ramesh';
let res=a.concat(b)
//returns concat of the string 
//output:helloramesh
console.log(res)
let es=a.endsWith('hello');
//returns endswith of the string
//output:true
console.log(es)
let ra = a.includes("hello");
// returns includes of the string wheather the string is there or not
//output:true
console.log(ra)
let n = b.indexOf("ramesh");
//returns indexof the string 
// output:0
console.log(n)
let l=a.lastIndexOf("hello");
//returns last indexof the string 
//output:0
console.log(l)
// returns repeat of the string
//output:hellohello
console.log(a.repeat(2))
let m=b.replace("ramesh","world");
//returns replace of the new string
//output:world
console.log(m)
let h=m.search("world");
//returns search of the string 
//output:0
console.log(h)
let j=m.slice(0,5);
//returns slice of the string
//output:world
console.log(j)
let split=res.split("");
//returns split of the string 
//output :["h", "e", "l", "l", "o", "r", "a", "m", "e", "s", "h"]
console.log(split)
let p=a.startsWith("hello");
//returns startsWith of the string
//output:true
console.log(p)
let res1 =b .substr(1, 4);
//returns substr of the string 
//output:ames
console.log(res1)
let res2 =res.substring(1, 6);
//returns substring of the substring
//ouput:ellor
console.log(res2)
let res3 = res.toLowerCase();
//returns to lowercase of the string
//output:helloramesh
console.log(res3)
let res4=res.toUpperCase();
//returns to uppercase of the string
//output:HELLORAMESH
console.log(res4)
let z = "       Hello World!        ";
//returns the trim(remove the white space of the string) of the string 
//output:Hello world! 
console.log(z.trim())


//---------------------------------------------------------------------//

//NUMBERS METHODS//

let a2=34.67809;
let n = a2.toFixed(2);
//returns to fixed of the NUMBERS
//output:34.68
console.log(n)

let a2=34.67809;
let n1 = a2.toExponential();
//returns to toExponential of the numbers 
//output:3.467809e+1
console.log(n1)

let a = 150;
let b2=a.toString();           
let b3=(150).toString();       
let b4=(100+50).toString();


console.log(a)
console.log(b2)
console.log(b3)
console.log(b4)

//global methods//
//used for testing purpose
console.log(n1)

//method writes a warn to console
console.warn(2)

//method writes a error message to console
console.error("error");

//used to The first parameter is required, and must be either an object, or an array, containing data to fill the table.
console.table(["Audi", "Volvo", "Ford"]);
//method writes a msg to console 
console.info("helloeee")
//
//alert box specified box with ok button
//alert("Hello! I am an alert box!!");
//A confirm box is often used if you want the user to verify or accept something.
//confirm("Press a button!");

//A prompt box is often used if you want the user to input a value before entering a page.
//function myFunction(){
//let person= prompt("Please enter your name", "ramesh");

//if (person != null) {
  //document.getElementById("demo").innerHTML =
  //"Hello " + person + "! How are you today?";
//}
//}
//isnan() if value is number it say false if it is not is say true
function myFunction(){
let a="";        
number=number+Number.isNaN('Hello')
}//true
//parse the string and written a whole number 
let x1=parseInt("10");         // returns 10
let x2=parseInt("10.33");      // returns 10
let x3=parseInt("10 20 30");   // returns 10
let x4=parseInt("10 years");   // returns 10
console.log(x4)  

//parse the string and written a Number
let c1=parseFloat("10");        // returns 10
let c2=parseFloat("10.33");     // returns 10.33
let c3=parseFloat("10 20 30");  // returns 10
let c4=parseFloat("10 years");  // returns 10
let c5=parseFloat("years 10");  // returns NaN
console.log(c2)






