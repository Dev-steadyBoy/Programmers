### N개의 최소공배수

---

###### 🤓문제 설명

두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.

##### 🤓제한 조건

- arr은 길이 1이상, 15이하인 배열입니다.
- arr의 원소는 100 이하인 자연수입니다.

##### 🤓입출력 예

| arr           | result |
| ------------- | ------ |
| [2, 6, 8, 14] | 168    |
| [1, 2, 3]     | 6      |

## 🤓문제 풀이 방법

```javascript
function solution(arr) {
  let answer = 1;
  for (let i = 0; i < arr.length; i++) {
    answer = getLcm(answer, arr[i]);
  }
  return answer;
}

function getLcm(a, b) {
  return (a * b) / gcd(a, b);
}

function gcd(a, b) {
  let remainder = a % b;
  if (remainder == 0) return b;
  return gcd(b, remainder);
}

// 최소 공배수는 두 수를 곱한 값을 최대 공약수로 나눈 값과 같다.
```

```javascript
// ..?
function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
```

```javascript
// 이 풀이도 좋다
function solution(n, a, b) {
  let count = 0;
  while (Math.abs(a - b) != 0) {
    a = ifOddAddOne(a);
    b = ifOddAddOne(b);
    a = a / 2;
    b = b / 2;
    count++;
  }

  return count;
}

const ifOddAddOne = (A) => {
  return A % 2 === 0 ? A : A + 1;
};
```
