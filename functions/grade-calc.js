// calculate student score based on total possible score
//total score = 20
// A 90-100 B 80-89 C 70-79 D 60-69 f 0-59

// let studentGrade = function(studentScore = 0, totalPossibleScore = 20) {
//   let score = (studentScore / totalPossibleScore) * 100;

//   if (score <= 100 && score >= 90) {
//     console.log(
//       `You got an A (${score})% your total score was ${studentScore}/${totalPossibleScore}`
//     );
//   } else if (score <= 89 && score >= 80) {
//     console.log(
//       `You got an B (${score})% your total score was ${studentScore}/${totalPossibleScore}`
//     );
//   } else if (score <= 79 && score >= 70) {
//     console.log(
//       `You got an C (${score})% your total score was ${studentScore}/${totalPossibleScore}`
//     );
//   } else if (score <= 69 && score >= 60) {
//     console.log(
//       `You got an D (${score})% your total score was ${studentScore}/${totalPossibleScore}`
//     );
//   } else if (score <= 60 && score >= 0) {
//     console.log(
//       `You got an F (${score})% your total score was ${studentScore}/${totalPossibleScore}`
//     );
//   } else {
//     console.log(
//       `You got an Z (${score})% your total score was ${studentScore}/${totalPossibleScore}`
//     );
//   }
// };

// studentGrade(20);

//cleaner way of doing it.
let gradeCalc = function(score, totalScore = 20) {
  let percent = (score / totalScore) * 100;
  let letterGrade = "";

  if (percent >= 90) {
    letterGrade = "A";
  } else if (percent >= 80) {
    letterGrade = "B";
  } else if (percent >= 70) {
    letterGrade = "C";
  } else if (percent >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  return `You got a ${letterGrade} (${percent}%!)`;
};

let result = gradeCalc(-1);
console.log(result);
