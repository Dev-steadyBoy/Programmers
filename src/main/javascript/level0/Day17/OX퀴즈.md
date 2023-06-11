### OX퀴즈

---

###### 문제 설명

덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다. 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.

##### 제한 조건

- 연산 기호와 숫자 사이는 항상 하나의 공백이 존재합니다. 단 음수를 표시하는 마이너스 기호와 숫자 사이에는 공백이 존재하지 않습니다.
- 1 ≤ quiz의 길이 ≤ 10
- X, Y, Z는 각각 0부터 9까지 숫자로 이루어진 정수를 의미하며, 각 숫자의 맨 앞에 마이너스 기호가 하나 있을 수 있고 이는 음수를 의미합니다.
- X, Y, Z는 0을 제외하고는 0으로 시작하지 않습니다.
- - 10,000 ≤ X, Y ≤ 10,000
- - 20,000 ≤ Z ≤ 20,000
- [연산자]는 + 와 - 중 하나입니다.

##### 입출력 예

| quiz                                                       | result               |
| ---------------------------------------------------------- | -------------------- |
| ["3 - 4 = -3", "5 + 6 = 11"]                               | ["X", "O"]           |
| ["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"] | ["O", "O", "X", "O"] |

## 문제 풀이 방법

- 문자열.split은 문자열 마디마다 index를 정해준다. 예를 들어서 const str = 'The quick brown fox' 을 split하면 인덱스 2는 brown이 된다.
  이번 문제를 풀면서 주의해야할 점은 배열의 인덱스를 잘 파악하자는 것이다.

  처음에 문제를 잘못 읽어서 문자열로 split을 하는데

  itemArr = item.split(' '); 이 파트 이후 부분이 이해가 안 됐었다. 어떻게 split된 배열이 나오지도 않았는데, 존재하지 않은 배열의 인덱스를 왜 호출하지? 라고 말이다. 다시 읽어보니 배열 인덱스 0번 안에 많은 문자열이 존재하고 있는 것을 확인했다.. 이런..

- 배열에서 반복문을 쓰고 싶으면 forEach 메서드

```javascript
function solution(quiz) {
  var answer = [];
  for (let i = 0; i < quiz.length; i++) {
    const item = quiz[i];
    const itemArr = item.split(' '); // <-------- 이 파트 이후
    const firstNum = Number(itemArr[0]);
    const op = itemArr[1];
    const secondNum = Number(itemArr[2]);
    const result = Number(itemArr[4]);

    if (op === '+') {
      firstNum + secondNum === result ? answer.push('O') : answer.push('X');
    } else {
      firstNum - secondNum === result ? answer.push('O') : answer.push('X');
    }
  }
  return answer;
}
```

```javascript
function solution(quiz) {
  var answer = [];
  for (let i = 0; i < quiz.length; i++) {
    const item = quiz[i];
    const itemArr = item.split(' ');
    const firstNum = Number(itemArr[0]);
    const op = itemArr[1];
    const secondNum = Number(itemArr[2]);
    const result = Number(itemArr[4]);

    const calResult = op === '+' ? firstNum + secondNum : firstNum - secondNum;
    if (calResult === result) {
      answer.push('O');
    } else {
      answer.push('X');
    }
  }
  return answer;
}
```

```javascript
function solution(quiz) {
  var answer = [];
  for (let i = 0; i < quiz.length; i++) {
    const item = quiz[i];
    const [firstNum, op, secondNum, _, result] = item
      .split(' ')
      .map((v, index) => {
        if (index === 1) {
          return v;
        }
        return Number(v);
      });

    const calResult = op === '+' ? firstNum + secondNum : firstNum - secondNum;
    if (calResult === result) {
      answer.push('O');
    } else {
      answer.push('X');
    }
  }
  return answer;
}
```

```javascript
function solution(quiz) {
  let answer = [];
  quiz.forEach((val) => {
    const [x, sign, y, , z] = val.split(' ');
    let sum = 0;
    if (sign === '+') {
      sum = Number(x) + Number(y);
    } else {
      sum = Number(x) - Number(y);
    }
    sum === Number(z) ? answer.push('O') : answer.push('X');
  });
  return answer;
}
```
