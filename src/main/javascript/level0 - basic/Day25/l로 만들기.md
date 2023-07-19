### l로 만들기

---

###### 🤓문제 설명

알파벳 소문자로 이루어진 문자열 myString이 주어집니다. 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 solution 함수를 완성해 주세요.

##### 🤓제한 조건

- 1 ≤ myString ≤ 100,000
  - myString은 알파벳 소문자로 이루어진 문자열입니다.

##### 🤓입출력 예

| myString     | result       |
| ------------ | ------------ |
| "abcdevwxyz" | "lllllvwxyz" |
| "jjnnllkkmm" | "llnnllllmm" |

## 🤓문제 풀이 방법

```javascript
function solution(myString) {
  const compareL = 'l'.charCodeAt(0);
  return [...myString]
    .map((v) => (v.charCodeAt(0) < compareL ? 'l' : v))
    .join('');
}
```

```javascript
// 정규표현식 사용해보기
const solution = (myString) => myString.replace(/[a-k]/g, 'l');
```

```javascript
// 문자 자체로 비교 가능
function solution(myString) {
  return [...myString].map((v) => (v < 'l' ? 'l' : v)).join('');
}
```
