function hello(){
    console.log("hello");
}
const hello1=()=>{
    console.log("hello1");
}
hello();
hello1();
function add(x,y){
    return (x+y);
}

const sum=add(2,4);
console.log("sum=",sum);
const add1=(a,b=1)=>a+b;
console.log("sum1=",add1(23,45));
console.log("sum2=",add1(23));