function solution(a, b) {
  let answer = 0;
  let count = Math.abs(a - b);
  let min;

  for (let i = 0; i <= count; i++) {
    answer += Math.min(a, b) + i;
  }

  return answer;
}
