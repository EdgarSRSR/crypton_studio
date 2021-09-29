function getStatistics(marks) {
    var sum = 0;
    for (var i = 0; i < marks.length; i++) {
        sum += marks[i].avgMark;
    }
    var avgMark = sum / marks.length;
    var lowestStudent = "";
    var lowestgrade = marks[0].avgMark;
    for (var i = 0; i < marks.length; i++) {
        if (marks[i].avgMark <= lowestgrade) {
            lowestStudent = marks[i].name;
        }
    }
    var lowestMark = lowestStudent;
    var highestStudent = "";
    var highestgrade = marks[0].avgMark;
    for (var i = 0; i < marks.length; i++) {
        if (marks[i].avgMark >= highestgrade) {
            highestStudent = marks[i].name;
        }
    }
    var highestMark = highestStudent;
    return { avgMark: avgMark, highestMark: highestMark, lowestMark: lowestMark };
}
var testMarks = [{
        name: 'Vasya',
        avgMark: 3.75
    }, {
        name: 'Lena',
        avgMark: 4.89
    }];
console.log(getStatistics(testMarks));
