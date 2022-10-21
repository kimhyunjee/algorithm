
let input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");



let time = input[0].split(" ");
let timeHour= Number(time[0]);
let timeMinute = Number(time[1]);
let minute = Number(input[1]);

let endTimeH = parseInt((timeHour*60 + timeMinute+minute)/60);
let endTimeM = parseInt((timeHour*60 + timeMinute+minute)%60);

console.log(endTimeH>=24? endTimeH-24:endTimeH,endTimeM);