function solution(array, height) {
  let answer = 0;

  array.map((x) => {
    if (x > height) answer++;
  });

  return answer;
}
