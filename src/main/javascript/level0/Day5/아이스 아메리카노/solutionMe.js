function solution(money) {
  var answer = [];
  let coffeePrice = 5500;
  let changeMoney = 0;
  if (money % coffeePrice === 0) {
    answer.push(money / coffeePrice, changeMoney);
    return answer;
  } else if (money > coffeePrice && money < 1000001) {
    answer.push(
      Math.floor(money / coffeePrice),
      Math.floor(money % coffeePrice)
    );
    return answer;
  } else {
    answer.push(
      Math.floor(money / coffeePrice),
      Math.floor(money / coffeePrice)
    );
    return answer;
  }
}

// 이것저것 시도해봤지만 80점.. 뭐가 문제일까
