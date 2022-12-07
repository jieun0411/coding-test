function solution(s) {
  let answer;
  let stack = [];
  let arr = s.split("");

  if (arr[0] === ")") return false;
  if (arr[arr.length] === "(") return false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      stack.push("(");
    } else if (arr[i] === ")") {
      stack.pop();
    }
  }

  stack.length === 0 ? (answer = true) : (answer = false);

  return answer;
}
