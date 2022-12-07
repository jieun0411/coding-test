function solution(s) {
  let stackCount = 0;
  let arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    arr[i] === "(" ? (stackCount += 1) : (stackCount -= 1);
    if (stackCount < 0) return false;
  }

  return stackCount === 0 ? true : false;
}

console.log(solution(")()("));
