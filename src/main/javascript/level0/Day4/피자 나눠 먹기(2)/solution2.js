function solution(n) {
  let cnt = 1;
  while (true) {
    if ((cnt * 6) % n === 0) {
      return cnt;
    }
    cnt++;
  }
}

// n이 1명일 때 1판
// n이 2명일 때 1판
// n이 3명일 때 1판
// n이 4명일 때 2판(2*6 = 12 /n = 3조각씩 꿀꺽)
// n이 5명일 때 1❌,2❌,3❌,4❌,5판(5*6 = 30 / n)
// n이 6명일 때 1판
