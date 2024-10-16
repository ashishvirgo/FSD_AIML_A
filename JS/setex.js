const myset=new Set();
console.log(myset);
myset.add(24);
myset.add(21);
myset.add(12);
myset.add(24);
myset.add(21);
console.log(myset);
const num=[1,2,3,4,5,6];
const a1=num.reduce((n,s)=>{
    return (n+s)});
console.log(a1);