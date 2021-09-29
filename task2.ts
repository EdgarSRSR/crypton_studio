const fs = require("fs");

let n = 5;

let numberLines = 0;

function createArray(a: number){
	
	let array = []; 

	for(let i = 1; i <= a ; i++){
		array.push(i);
		array.push(0);
	}

	return array;
	
}


function combinationUtil(arr, data, start, end, index, r){
	let result = "";
	if(index == r){
		for(let j = 0; j<r; j++){
			result = result +data[j]+" ";
			numberLines +=1;
		}
		result = result + "\n";

		fs.appendFile("document.txt", result, function(err){
			if(err){
			  return console.log("error");
			}
		})
	}


	for(let i=start; i<= end && end-i+1 >= r-index; i++){
		data[index] = arr[i];
		combinationUtil(arr, data, i+1, end, index+1, r);
	}
}

function printCombination(arr,num,r){
	let data = new Array(r);
	combinationUtil(arr, data, 0, num-1, 0, r);
}

let arr = createArray(n);
let num = arr.length;
let r = n;
printCombination(arr, num, r);
console.log(numberLines);

