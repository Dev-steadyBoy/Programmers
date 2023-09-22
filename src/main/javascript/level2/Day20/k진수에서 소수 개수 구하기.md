### k진수에서 소수 개수 구하기

---

###### 🤓문제 설명

양의 정수 n이 주어집니다. 이 숫자를 k진수로 바꿨을 때, 변환된 수 안에 아래 조건에 맞는 소수(Prime number)가 몇 개인지 알아보려 합니다.

- 0P0처럼 소수 양쪽에 0이 있는 경우
- P0처럼 소수 오른쪽에만 0이 있고 왼쪽에는 아무것도 없는 경우
- 0P처럼 소수 왼쪽에만 0이 있고 오른쪽에는 아무것도 없는 경우
- P처럼 소수 양쪽에 아무것도 없는 경우
- 단, P는 각 자릿수에 0을 포함하지 않는 소수입니다.
  - 예를 들어, 101은 P가 될 수 없습니다.

예를 들어, 437674을 3진수로 바꾸면 211020101011입니다. 여기서 찾을 수 있는 조건에 맞는 소수는 왼쪽부터 순서대로 211, 2, 11이 있으며, 총 3개입니다. (211, 2, 11을 k진법으로 보았을 때가 아닌, 10진법으로 보았을 때 소수여야 한다는 점에 주의합니다.) 211은 P0 형태에서 찾을 수 있으며, 2는 0P0에서, 11은 0P에서 찾을 수 있습니다.

정수 n과 k가 매개변수로 주어집니다. n을 k진수로 바꿨을 때, 변환된 수 안에서 찾을 수 있는 위 조건에 맞는 소수의 개수를 return 하도록 solution 함수를 완성해 주세요.

##### 🤓제한 조건

- 1 ≤ n ≤ 1,000,000
- 3 ≤ k ≤ 10

##### 🤓입출력 예

| n      | k   | result |
| ------ | --- | ------ |
| 437674 | 3   | 3      |
| 110011 | 10  | 2      |

## 🤓문제 풀이 방법

- 시간이 너무 오래 걸려서 정답이랑 비교하는 방식으로 풀겠음..

```javascript
function solution(n, k) {
  var answer = 0;
  const convertedDecimal = n
    .toString(k)
    .split('0')
    .map((v) => Number(v))
    .sort((a, b) => b - a);
  const mappingNum = convertedDecimal.filter((v) => {
    if (!v.includes('0') || v === '1' || v === '0') return 0;
    else {
      return Number(v);
    }
  });

  const primeArr = isPrime(convertedDecimal[0]);
  for (let i = 0; i < mappingNum.length; i++) {
    if (primeArr[mappingNum[i]]) answer++;
  }
  return answer;
}

function isPrime(num) {
  const arr = new Array(num).fill(true);
  arr[0] = false;
  arr[1] = false;
  for (let i = 2; i <= num; i++) {
    if (!arr[i]) continue;

    for (let j = i ** 2; j <= num; j += i) {
      arr[j] = false;
    }
  }
  return arr;
}

// prime을 찾는 방법(변환한 숫자의 가장 큰 숫자를 바탕으로 에라토스 테네스의 체 구현하면 됨)
```

```javascript
// 원인 파악: 1. 일단 '101' 같은 케이스는 split에 의해 어차피 '1' '1'로 만들어지는데 이 부분을 착각해서 계산 미스를 냈음.
// 2. 배열로 만들면 용량에 문제도 있지만, 속도도 한 없이 느리다..
function solution(n, k) {
  var answer = 0;
  const num = n.toString(k).split('0');
  console.log(num);
  for (let i = 0; i < num.length; i++) {
    if (isPrime(Number(num[i]))) answer++;
  }
  return answer;
}

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// prime을 찾는 방법(변환한 숫자의 가장 큰 숫자를 바탕으로 에라토스 테네스의 체 구현하면 됨)
```
