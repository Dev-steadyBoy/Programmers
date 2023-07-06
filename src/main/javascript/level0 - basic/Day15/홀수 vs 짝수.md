### 홀수 vs 짝수

---

###### 🤓문제 설명

정수 리스트 num_list가 주어집니다. 가장 첫 번째 원소를 1번 원소라고 할 때, 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요. 두 값이 같을 경우 그 값을 return합니다.

##### 🤓제한 조건

- 5 ≤ num_list의 길이 ≤ 50
- 9 ≤ num_list의 원소 ≤ 9

##### 🤓입출력 예

| num_list           | result |
| ------------------ | ------ |
| [4, 2, 6, 1, 7, 6] | 17     |
| ["l"]              | []     |

## 🤓문제 풀이 방법

```javascript
function solution(num_list) {
  let evenIdx = num_list
    .filter((_, i) => i % 2 === 0)
    .reduce((acc, cur) => acc + cur, 0);
  let oddIdx = num_list
    .filter((_, i) => i % 2 === 1)
    .reduce((acc, cur) => acc + cur, 0);
  return Math.max(evenIdx, oddIdx);
}
```

```javascript
function solution(num_list) {
  let even = 0;
  let odd = 0;

  num_list.map((v, idx) => {
    !(idx % 2) ? (even += v) : (odd += v);
  });

  return odd > even ? odd : even;
}
```
