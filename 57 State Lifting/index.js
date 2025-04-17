function outer(){
    let name="a";
    function inner(){
      console.log(name);
    }
    inner()
}

outer()