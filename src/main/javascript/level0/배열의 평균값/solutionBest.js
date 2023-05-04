function solution(numbers) {
  var answer = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  return answer;
}

// reduce(callbackFn, initialValue)  reduce는 배열을 돌면서 값들을 모두 더해준다.
// 화살표 함수로 표현 가능
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
