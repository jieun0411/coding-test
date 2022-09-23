function solution(n) {
  let arr = Array.from(String(n));
  let count = 0;

  for (let i = 0; i <= arr.length; i += 1) {
    for (let j = count; j >= 0; j -= 1) {
      if (arr[j] > arr[j - 1]) {
        let tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
      }
    }
    count++;
  }

  return Number(arr.join(""));
}
