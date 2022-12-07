function solution(s) {
  let answer = "";
  let arr = s.split(" ");
  return (answer = Math.min(...arr) + " " + Math.max(...arr));
}
