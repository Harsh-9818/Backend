console.log("Listening");

//For Each
arr = [1, 2, 3, 4]
arr.forEach(val => {
    console.log(val + " is here");

});
console.log(arr);

//Map
let newarr = arr.map(val => {
    return ("hello ji");
})

console.log(newarr);

//Filter
let filter = arr.filter(val => {
    if (val > 2) { return true; }
}) 

console.log(filter);


//Find
let find = arr.find( val => {
    if(val === 2){
        return val;
    }
})

console.log(find);

//Objects
let obj = {
    name : "harsh",
    age: 19
}
console.log(obj.name);

