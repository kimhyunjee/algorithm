const N = require('fs').readFileSync('/dev/stdin').toString().map(el=>+el)

let line = 0;
let maxValue = 0;

while ( maxValue < N) {
    line++
    maxValue += line;
}


let idx = N - (maxValue - line);

if (line % 2 == 0) {
    child = idx;
    parents =  (line + 1) - child;
} else {
    child = ( line + 1 ) - idx;
    parents = ( line + 1 ) - child;
}

console.log( child + '/' + parents)
