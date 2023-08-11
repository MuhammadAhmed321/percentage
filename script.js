var name = prompt("Enter your names");
var sindhiMarks = +prompt("Enter your sindhiMarks");
var UrduMarks = +prompt("Enter your UrduMarks");
var MathMarks = +prompt("Enter your MathMarks");
var chimstryMarks = +prompt("Enter your chimstryMarks");
var TotalMarks = 400;
var studentMarks = sindhiMarks + MathMarks + UrduMarks + chimstryMarks;
var percentage = studentMarks / TotalMarks * 100;
console.log(names + " total marks is " + studentMarks + " out of " + TotalMarks + " and  percentage is " + percentage)

