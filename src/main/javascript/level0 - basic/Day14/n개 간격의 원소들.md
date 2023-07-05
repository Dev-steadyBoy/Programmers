### n개 간격의 원소들

---

###### 🤓문제 설명

정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

##### 🤓제한 조건

- 5 ≤ num_list의 길이 ≤ 20
- 1 ≤ num_list의 원소 ≤ 9
- 1 ≤ n ≤ 4

##### 🤓입출력 예

| num_list           | n   | result  |
| ------------------ | --- | ------- |
| [4, 2, 6, 1, 7, 6] | 2   | [4,6,7] |
| [4, 2, 6, 1, 7, 6] | 4   | [4,7]   |

## 🤓문제 풀이 방법

```javascript
function solution(num_list, n) {
  const arr = [];
  for (let i = 0; i < num_list.length; i += n) {
    arr.push(num_list[i]);
  }
  return arr;
}
```

```javascript
// filter 사용해보기
function solution(num_list, n) {
  return num_list.filter((_, i) => i % n === 0);
}
```

```javascript
const solution = (num_list, n) => num_list.filter((_, i) => !(i % n));
```
