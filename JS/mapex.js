const mymap=new Map(
    [
        ["key1",123],
        [34,"js"]
    ]
);
console.log(mymap.get(34));
console.log(mymap.get("key1"));
mymap.set("key2","java");
mymap.set("key3",101.50);
console.log(mymap.get("key2"));
console.log(mymap.get("key3"));
console.log(mymap);