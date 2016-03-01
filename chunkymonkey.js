function chunk(arr, size) {

//Created a new empty array to store chunks in
var b =[];

//Looping through the array and then adding chunks to the newly created array b

while(arr.length) {
   
  b.push(arr.splice(0,size));
 
  
}
   return b;
}
console.log(chunk(["a", "b", "c", "d"], 2));



chunk(["a", "b", "c", "d"], 2);