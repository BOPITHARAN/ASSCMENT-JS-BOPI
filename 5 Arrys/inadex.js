let favColors = ["red", "white", "black"];
// {} Object
// [ ] Array
favColors[4] = 45
console.log(favColors);
console.log(favColors.length);


// ...............length calutre...........................
 
// console.log(favColors.length)
//............................................................................................
const furuds = ["apple", "lemon", "grapes"];

// Adding eliments in arrays 

// normal 
furuds[3] = "orrange";
// push
furuds.push(" Strawberries ", "veg");
// unshift
furuds.unshift("gauwa");
// splice
furuds.splice(2, 0, "banana");

// removeing eliment in arrays..................




// Finding Eliment Arrays
console.log(furuds.indexOf("red") !== -1);
// or
furuds.includes("lemon");

