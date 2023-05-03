//🥳🥳🥳 테스트 1번 실패였는데 문제 해결했다!!! 🥳🥳🥳
function solution(n) {
  let resultValue = 0;
  let newArray = [];
  function calFunc() {
    if (n % 2 === 0) {
      let evenNumber = n / 2;
      for (let i = 0; i < evenNumber; i++) {
        resultValue = 2 * i + 1;
        newArray.push(resultValue);
      }
    } else {
      let oddNumber = Math.round(n / 2);
      for (let i = 0; i < oddNumber; i++) {
        resultValue = 2 * i + 1;
        newArray.push(resultValue);
      }
    }
  }
  if (n >= 1) {
    calFunc();
  }
  return newArray;
}

// 10개일 때 0,1,2,3,4 5번 반복해야함
// 11개일 때 0,1,2,3,4,5
// 15개일 때 0,1,2,3,4,5,6,7
// 16개일 때 0,1,2,3,4,5,6,7
// 17개일 때 0,1,2,3,4,5,6,7,8
