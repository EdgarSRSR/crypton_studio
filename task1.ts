interface Student{
	name: string;
	avgMark: number;
}

interface Statistics {
	avgMark: number;
	highestMark: string;
	lowestMark: string;
}

function getStatistics(marks: Student[]): Statistics{
	
	let sum = 0;
	for (let i = 0; i < marks.length ; i++) {
  		sum += marks[i].avgMark;
	}

	let avgMark = sum / marks.length;


	let lowestStudent = "";
	let lowestgrade = marks[0].avgMark;
	for (let i = 0; i < marks.length ; i++) {
  		if(marks[i].avgMark <= lowestgrade ){
  			lowestStudent = marks[i].name;

  		}
	}
	let lowestMark = lowestStudent; 

	let highestStudent = "";
	let highestgrade = marks[0].avgMark;
	for (let i = 0; i < marks.length ; i++) {
  		if(marks[i].avgMark >= highestgrade ){
  			highestStudent = marks[i].name;

  		}
	}

	let highestMark = highestStudent;

	return {avgMark: avgMark, highestMark: highestMark, lowestMark: lowestMark}

}

const testMarks = [{
	name: 'Vasya',
	avgMark: 3.75
}, {
	name: 'Lena',
	avgMark: 4.89
}]

console.log(getStatistics(testMarks))