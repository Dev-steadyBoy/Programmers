function solution(price) {
  let maxPrice = 1000001;
  let vvipPrice = 500000;
  let vipPrice = 300000;
  let thxPrice = 100000;
  if (price >= vvipPrice && price < maxPrice) {
    return Math.floor(price * 0.8);
  } else if (price >= vipPrice && price < vvipPrice) {
    return Math.floor(price * 0.9);
  } else if (price >= thxPrice && price < vipPrice) {
    return Math.floor(price * 0.95);
  } else if (price >= 10 && price < thxPrice) {
    return price;
  }
}
