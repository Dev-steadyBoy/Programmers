### k의 개수ㄴ

---

###### 🤓문제 설명

1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

##### 🤓제한 조건

- 1 ≤ i < j ≤ 100,000
- 0 ≤ k ≤ 9

##### 🤓입출력 예

| i   | j   | k   | result |
| --- | --- | --- | ------ |
| 1   | 13  | 1   | 6      |
| 10  | 50  | 5   | 5      |
| 3   | 10  | 2   | 0      |

## 🤓문제 풀이 방법

// 이 문제는 1,10,11,12,13 을 6개로 본다. 그 이유는 모든 1의 갯수를 계산했다고 보면 된다.

```javascript
// 잘못 계산한 코드
function solution(i, j, k) {
  var answer = 0;
  for (let cnt = i; cnt <= j; cnt++) {
    if (String(cnt).includes(String(k))) {
      answer++;
    }
  }
  return answer;
}
```

```javascript
// 풀기는 했으나 효율이 응..?
function solution(i, j, k) {
  var answer = 0;
  let splittedArray = [];
  for (let cnt = i; cnt <= j; cnt++) {
    if (String(cnt).includes(String(k))) {
      splittedArray.push(String(cnt).split(''));
    }
  }

  return splittedArray.flat().filter((a) => a === String(k)).length;
}
```

```javascript
// k가 9라고 가정하면 '191'인 경우 9로 분리하면 '1', '1'이고 '19191'이면 '1', '1', '1' 이렇게 9의 개수보다 항상 1이 많아지므로 -1
// O(N) 효율

function solution(i, j, k) {
  let a = '';
  for (i; i <= j; i++) {
    a += i;
  }

  return a.split(k).length - 1;
}
```
