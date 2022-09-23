function solution(n) {
  let arr = Array.from(String(n));
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += Number(arr[i]);
  }

  if (n % sum === 0) return true;
  else return false;
}
