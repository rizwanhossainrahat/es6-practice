// function doubleIt(num){
//     return num*2;
// }

// const doubleIt=function(num){
//     return num*2;
// }

// es6 function simple write 
const doubleIt=num=>num*2;
const add=(x,y)=>x+y;
const give=()=>5;
const math=(x,y)=>{
    const sum=x+y;
    const diff=x-y;
    const result=sum*diff;
    return result;
}

const result=add(10,5);
const result2=give();
const result3=math(10,6);
console.log(result3)



var result=doubleIt(10);
console.log(result);