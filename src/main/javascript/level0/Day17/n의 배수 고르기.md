### n의 배수 고르기

---

###### 문제 설명

정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

##### 제한 조건

- 1 ≤ n ≤ 10,000
- 1 ≤ numlist의 크기 ≤ 100
- 1 ≤ numlist의 원소 ≤ 100,000

##### 입출력 예

| n   | numlist                        | result             |
| --- | ------------------------------ | ------------------ |
| 3   | [4, 5, 6, 7, 8, 9, 10, 11, 12] | [6, 9, 12]         |
| 5   | [1, 9, 3, 10, 13, 5]           | [10, 5]            |
| 12  | [2, 100, 120, 600, 12, 12]     | [120, 600, 12, 12] |

## 문제 풀이 방법

filter는 특정 조건에 맞는 새 배열을 반환한다.

```javascript
function solution(n, numlist) {
  var answer = numlist.filter((num) => num % n === 0);
  return answer;
}
```

```javascript
// for문 사용
function solution(n, numlist) {
  const answer = [];
  for (let i = 0; i < numlist.length; i++) {
    const item = numlist[i];
    if (item % n === 0) {
      answer.push(item);
    }
  }
  return answer;
}
```
