const solution = (n) => {
  let piece = 6;

  while (true) {
    if (piece % n === 0) {
      break;
    }
    piece += 6;
  }

  return piece / 6;
};

// 깔끔하고 명시적이라 보기 좋았던 코드
