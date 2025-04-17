
let s="kokare";

console.log(s.length);
console.log(s[4]);
console.log(typeof s);

let obj={
    item:"pen",
    price:20,

};

let output=`the cost of ${obj.item} is ${obj.price}`;
console.log(output);
console.log("the cost of", obj.item," is", obj.price);

console.log("akshay \nkokare");
console.log("akshay\tkokare");

x="akshay\tkokare";
console.log(x.length);

console.log(x.toUpperCase());
console.log(x.toLowerCase());
y="   a k s hay   " //remove cornar space
console.log(y.trim());

let q="123456";
console.log(q.slice(1,4)); //return part of string
console.log(q.concat(y)); //joins strings
console.log(y.replace("a","e")); //one time replace
console.log(y.replaceAll("a","e")); //multi time replace


