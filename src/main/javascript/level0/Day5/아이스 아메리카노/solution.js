function solution(money) {
  const coffeeCnt = Math.floor(money / 5500);
  const changeMoney = money % 5500;
  return [coffeeCnt, changeMoney];
}

// 이렇게 쉬운걸..
