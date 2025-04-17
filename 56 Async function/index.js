// async function getsData() {
//   setTimeout(function(){
//     console.log("I am inside set Timeout block");
//   },3000);
// }

// getsData()



// await -

// fetch API



async function getData() {
  // get request- async
  let responce=await fetch('https://jsonplaceholder.typicode.com/todos/1');
  // parse json -async
  let data=await responce.json();
  console.log(data);
}





