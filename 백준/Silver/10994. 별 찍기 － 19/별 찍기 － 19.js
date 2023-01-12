const N = +require('fs').readFileSync('/dev/stdin').toString().trim();

const getStar = (N) => {
  if (N === 1) {
    return ['*'];
  }
  const prev = getStar(N - 1);
  const len = prev[0].length;
  return [
    '*'.repeat(len + 4),
    `*${' '.repeat(len + 2)}*`,
    ...prev.map(line => `* ${line} *`),
    `*${' '.repeat(len + 2)}*`,
    '*'.repeat(len + 4)
  ];
};

console.log(getStar(N).join('\n'));