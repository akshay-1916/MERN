let sr={
    age:12,
    wt:60,
    ht:150,
}

let de={...sr};

sr.age=90;

console.log("sr:",sr)
console.log("de: ",de);

// 
// method 2

let sr2={
    age:12,
    wt:60,
    ht:150,
}

// let sr3={
//     value:010,
// }

let de2=Object.assign({},sr2)

sr2.age=55;


console.log("de: ",de2);
console.log("sr:",sr2)
