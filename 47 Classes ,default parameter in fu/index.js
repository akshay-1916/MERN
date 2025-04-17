class human{
    age=20;  //public
    #wt=80; //private
    ht=180; 

    constructor(newAge,newHeight,newWeight){
        this.age=newAge;
        this.ht=newHeight;
        this.wt=newWeight;

    }


    walking(){
        console.log("I am Walking",this.#wt);
    }

    running(){
        console.log("I am Running");
    }

    get fetchWeight(){
        return this.#wt;
    }

    set modifyWeight(val){
        this.#wt=Val;
    }
}




let  obj =new human(99,120,66)
console.log(obj.wt)
// console.log(obj.#wt)


obj.walking();




function sayname(myName="king",sname="kkk"){
    console.log("My name is:",myName," ",sname);
}

sayname("akshay")





