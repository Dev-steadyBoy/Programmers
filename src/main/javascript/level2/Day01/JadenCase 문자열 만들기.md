### JadenCase 문자열 만들기

---

###### 🤓문제 설명

JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

##### 🤓제한 조건

- s는 길이 1 이상 200 이하인 문자열입니다.
- s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
  - 숫자는 단어의 첫 문자로만 나옵니다.
  - 숫자로만 이루어진 단어는 없습니다.
  - 공백문자가 연속해서 나올 수 있습니다.

##### 🤓입출력 예

| s                       | return                  |
| ----------------------- | ----------------------- |
| "3people unFollowed me" | "3people Unfollowed Me" |
| "for the last week"     | "For The Last Week"     |

## 🤓문제 풀이 방법

- 조건상 숫자로만 이루어진 문자는 없음. slice대신 subString 사용 가능 둘의 차이는 start와 end를 구분하는 방법이 다름.(음수일때) slice는 start지점을 중요시하는 느낌임. 자세한 내용은 구글링 ㄱㄱ

- [charAt설명](https://thisthat.dev/string-char-at-vs-string-bracket-notation/)

```javascript
// chatAt을 사용한 이유: 런타임에러 때문에.. 문제의 조건에 공백이 연속적으로 나올 수 있다고 했는데, 이 때 index로 접근할 경우 undefined에 메서드를 사용하기 때문에 에러가 발생한다.
function solution(s) {
  return s
    .toLowerCase()
    .split(' ')
    .map((v) => v.charAt(0).toUpperCase() + v.slice(1))
    .join(' ');
}
```

```javascript
//  예제
// 왜 'e'가 나올까? = truthy value =  1, falsy value = 0이기 때문에 1로 계산됨.
'hello'[NaN]; // undefined
'hello'.charAt(NaN); // 'h'

'hello'[undefined]; // undefined
'hello'.charAt(undefined); // 'h'

'hello'[true]; // undefined
'hello'.charAt(true); // 'e'

'hello'['00']; // undefined

// return 'h' because it will try to convert `00` to number first
'hello'.charAt('00');

'hello'[1.5]; // undefined
// return 'e' because it will round 1.23 to the number 1
'hello'.charAt(1.23);

'hello'[100]; // undefined
'hello'.charAt(100); // ''
```
