### flag에 따라 다른 값 반환하기

---

###### 🤓문제 설명

두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.

##### 🤓제한 조건

- -1,000 ≤ a, b ≤ 1,000

##### 🤓입출력 예

| a   | b   | flag  | result |
| --- | --- | ----- | ------ |
| -4  | 7   | true  | 3      |
| -4  | 7   | false | -11    |

## 🤓문제 풀이 방법

```javascript
const operations = {
  true: (a, b) => a + b,
  false: (a, b) => a - b,
};
function solution(a, b, flag) {
  const op = operations[flag];
  return op(a, b);
}

// 자료구조 해시 사용해보기
// 오늘 배운 해시는 for반복문을 대체하기에 좋다고 했다. 왜냐하면 중첩 루프는 대체로 빅오 O(N^2)의 알고리즘 효율성을 갖고있다고 했는데, 해시는 데이터 셀에 값을 넣고 그 공간을 키로 가리킨다. 그래서 읽기를 하면 O(1)의 선형시간을 갖는 알고리즘을 가질 수 있다. 그래서 공부도 할 겸 사용해봤음 O(1) >>>>>>>>>>>>>>>>>>>>> 넘사벽  >>>>> O(N)
```

```javascript
function solution(a, b, flag) {
  return flag ? a + b : a - b;
}
```
