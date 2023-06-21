const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const resource = [0].concat(input[1].split(" ").map(Number));
const cost = [0].concat(input[2].split(" ").map(Number));
const DP = Array.from({length: M+1}, (v, i) => (-1));
DP[0] = 0;

for (let step=1; step<N+1; step++){
    for (let col=M; col>0; col--){
        if (resource[step] < col){ 
            if (DP[col] != -1){ 
                DP[col] = Math.min(DP[col], cost[step] + DP[col-resource[step]]);
            }else{ 
                if (DP[col-resource[step]] != -1){ 
                    DP[col] = cost[step] + DP[col-resource[step]];
                }else{ 
                    DP[col] = -1;
                }
            }
        }else{ 
            if (DP[col] != -1){ 
                DP[col] = Math.min(DP[col], cost[step]);
            }else{
                DP[col] = cost[step];
            }
        }
    }
}

console.log(DP[M]);