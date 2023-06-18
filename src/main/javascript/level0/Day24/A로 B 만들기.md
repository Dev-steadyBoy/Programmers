### A로 B 만들기

---

###### 🤓문제 설명

문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

##### 🤓제한 조건

- 0 < before의 길이 == after의 길이 < 1,000
- before와 after는 모두 소문자로 이루어져 있습니다.

##### 🤓입출력 예

| before  | after   | result |
| ------- | ------- | ------ |
| "olleh" | "hello" | 1      |
| "allpe" | "apple" | 0      |

## 🤓문제 풀이 방법

```javascript
function solution(before, after) {
  before = [...before].sort();
  after = [...after].sort();
  // filter는 false인 값은 버린다. 그래서 값이 하나라도 틀린다면 length의 값은 다를테고, after 와 비교.
  return before.filter((a, i) => a === after[i]).length === after.length
    ? 1
    : 0;
}
```

```javascript
function solution(before, after) {
  return before.split('').sort().join('') === after.split('').sort().join('')
    ? 1
    : 0;
}
```
