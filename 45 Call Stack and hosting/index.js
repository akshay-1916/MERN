
let b=4;
console.log(b);



function d1(a,fn){
    console.log("hellow",fn);
    a();
}

function a(){
    console.log("akshay");
}

d1(a,"aa");



const arr=[

    function(a,b){
        return a+b;
    },

    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    }
]


let first=arr[0]

let ans=first(9,8);

console.log(ans);





