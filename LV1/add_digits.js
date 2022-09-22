function solution(n) {
  let answer = 0;
  let str = String(n);
  let arr = Array.from(str);

  for (let i = 0; i < arr.length; i += 1) {
    answer += Number(arr[i]);
  }

  return answer;
}
