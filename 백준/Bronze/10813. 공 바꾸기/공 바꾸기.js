const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function swapPlayers(players, i, j) {
    const temp = players[i];
    players[i] = players[j];
    players[j] = temp;
}

function main() {
    const [N, M] = input[0].split(' ').map(Number);
    const players = Array.from({ length: N }, (_, i) => i + 1);

    for (let i = 0; i < M; i++) {
        const [a, b] = input[i + 1].split(' ').map(Number);
        swapPlayers(players, a - 1, b - 1);
    }

    console.log(players.join(' '));
}

main();
