### rny_string

---

###### 🤓문제 설명

'm'과 "rn"이 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 하려고 합니다. 문자열 rny_string이 주어질 때, rny_string의 모든 'm'을 "rn"으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

##### 🤓제한 조건

- 1 ≤ rny_string의 길이 ≤ 100
- rny_string은 영소문자로만 이루어져 있습니다.

##### 🤓입출력 예

| myString      | result          |
| ------------- | --------------- |
| "masterpiece" | "rnasterpiece"  |
| "programmers" | "prograrnrners" |
| "jerry"       | "jerry"         |
| "burn"        | "burn"          |

## 🤓문제 풀이 방법

```javascript
function solution(rny_string) {
  return rny_string.includes('m')
    ? rny_string.replaceAll('m', 'rn')
    : rny_string;
}
```

```javascript
function solution(rny_string) {
  return rny_string.replaceAll(/m/g, 'rn');
}
```
