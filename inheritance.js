class Parent{
    constructor(name){
        this.fatherName=name;
    }
}
const father=new Parent("faruk");

console.log(father);

class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
    }
    getFullName(){
        return this.fatherName+" "+this.name;
    }
}
const baby=new Child("ornob",);
console.log(baby,getFullName());