let input = [4,6,8,9,0,1,2,5,6,3,8,7];
let output = [];
let twoHoles = [];
let oneHole = [];
let zeroHoles = [];

function hasTwoHoles(element, index, array) { 
   return (element == 8); 
} 
          
twoHoles = input.filter(hasTwoHoles); 

function hasOneHole(element, index, array) { 
   return (element == 4 || element == 6 || element == 9 || element == 0); 
} 
          
oneHole = input.filter(hasOneHole);


function hasZeroHoles(element, index, array) { 
   return (element == 1 || element == 2 || element == 3 || element == 5 || element == 7); 
} 
          
zeroHoles = input.filter(hasZeroHoles);

console.log("values with zero holes : " + zeroHoles );
console.log("values with one hole : " + oneHole );
console.log("values with two holes : " + twoHoles );

output = zeroHoles.concat(oneHole).concat(twoHoles);
console.log("final sorted array : " + output);