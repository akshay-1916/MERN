
// let k=document.createElement("p");
// k.textContent="king";

// let b=document.querySelector("body");
// b.appendChild(k);



let a=document.querySelector("#ak");


let n=document.createElement("span");
n.textContent="ak";

a.insertAdjacentElement("beforebegin",n)


m=document.createElement("h1");
m.textContent="H1 heading";
a.insertAdjacentElement("beforeend",m)