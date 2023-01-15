const [ _, ...words ] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);
const solve = words => {
    //count라는 객체에 각 단어를 순회하면서 count의 해당 알파벳 프로퍼티에 해당 알파벳 자리의 단위를 더하기
  const count = {};
  words.forEach(word => {
    [...word].forEach((alphabet, i) => {
      if (!count[alphabet]) count[alphabet] = 0;
      count[alphabet] += 10 ** (word.length - i - 1);
    });
  });
    //전체단어순회 후, count값들을 내림차순, 첫번째부터 9, 8, 7...을 차례로 곱하여 더하기
  console.log(
    Object.values(count)
      .sort((a, b) => b - a)
      .reduce((acc, v, i) => acc + v * (9 - i), 0)
  );
};
solve(words);