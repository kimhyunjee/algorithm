const [n, ...coords] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

console.log(
    coords
        .map(v => ({x: parseInt(v.split(" ")[0]), y: parseInt(v.split(" ")[1])}))
        .sort((a, b) => {
            if (a.x > b.x) return 1;
            else if (a.x < b.x) return -1;
            else {
                if (a.y > b.y) return 1;
                else return -1;
            }
        })
        .map(v => String(v.x) + " " + String(v.y)).join("\n")
);