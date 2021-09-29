var fs = require("fs");
var n = 5;
var numberLines = 0;
function createArray(a) {
    var array = [];
    for (var i = 1; i <= a; i++) {
        array.push(i);
        array.push(0);
    }
    return array;
}
function combinationUtil(arr, data, start, end, index, r) {
    var result = "";
    if (index == r) {
        for (var j = 0; j < r; j++) {
            result = result + data[j] + " ";
            numberLines += 1;
        }
        result = result + "\n";
        fs.appendFile("document.txt", result, function (err) {
            if (err) {
                return console.log("error");
            }
        });
    }
    for (var i = start; i <= end && end - i + 1 >= r - index; i++) {
        data[index] = arr[i];
        combinationUtil(arr, data, i + 1, end, index + 1, r);
    }
}
function printCombination(arr, num, r) {
    var data = new Array(r);
    combinationUtil(arr, data, 0, num - 1, 0, r);
}
var arr = createArray(n);
var num = arr.length;
var r = n;
printCombination(arr, num, r);
console.log(arr);
console.log(numberLines);
//console.log(result);
