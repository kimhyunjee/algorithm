const input = require('fs').readFileSync('dev/stdin').toString();

const n = Number(input);

const solution = (n) => {
	const binArr = n.toString(2).split("");
	binArr.shift();
    
	const answer = parseInt(binArr.join(""), 2);
    return answer ? answer * 2 : n;
}

console.log(solution(n));