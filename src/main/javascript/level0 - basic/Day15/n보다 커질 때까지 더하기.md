### n보다 커질 때까지 더하기

---

###### 🤓문제 설명

정수 배열 numbers와 정수 n이 매개변수로 주어집니다. numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요.

##### 🤓제한 조건

- 1 ≤ numbers의 길이 ≤ 100
- 1 ≤ numbers의 원소 ≤ 100
- 0 ≤ n < numbers의 모든 원소의 합

##### 🤓입출력 예

| numbers                  | n   | result |
| ------------------------ | --- | ------ |
| [34, 5, 71, 29, 100, 34] | 123 | 139    |
| [58, 44, 27, 10, 100]    | 139 | 239    |

## 🤓문제 풀이 방법

```javascript
function solution(numbers, n) {
  let result = 0;
  for (let plusNum of numbers) {
    result += plusNum;
    if (result > n) return result;
  }
  return result;
}
```

```javascript
function solution(numbers, n) {
  return numbers.reduce((a, c, i, t) => (a <= n ? a + c : a));
}
```

```javascript
function solution(numbers, n) {
  return numbers.reduce((acc, cur) => (acc <= n ? acc + cur : acc));
}
```
