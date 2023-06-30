### 문자열의 뒤의 n글자

---

###### 🤓문제 설명

문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

##### 🤓제한 조건

- my_string은 숫자와 알파벳으로 이루어져 있습니다.
- 1 ≤ my_string의 길이 ≤ 1,000
- 1 ≤ n ≤ my_string의 길이

##### 🤓입출력 예

| my_string        | n   | result        |
| ---------------- | --- | ------------- |
| "ProgrammerS123" | 11  | "grammerS123" |
| "He110W0r1d"     | 5   | "W0r1d"       |

## 🤓문제 풀이 방법

```javascript
function solution(my_string, n) {
  return my_string.slice(my_string.length - n, my_string.length);
}
```

```javascript
function solution(my_string, n) {
  return my_string.substring(my_string.length - n);
}
```

```javascript
// 더 깔끔하게 직관적으로 쓰려고 했는데 성능이 더 안 좋아짐..
function solution(intStrs, k, s, l) {
  let _answer = [];
  for (let items of intStrs) {
    let newArr = [...items].slice(s, s + l).join('');
    if (Number(newArr) > k) {
      _answer.push(Number(newArr));
    }
  }
  return _answer;
}
```

```javascript
// 왜 이 생각을 못헀을까 ㅠㅠ
function solution(intStrs, k, s, l) {
  return intStrs.map((v) => +v.slice(s, s + l)).filter((v) => v > k);
}
```
