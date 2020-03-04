//object strng number boolean //
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

