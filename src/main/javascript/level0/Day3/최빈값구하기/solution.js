function solution(array) {
  array.sort((a, b) => a - b);
  let cnt = 0;

  let modeValue = -1;
  let modeRepeat = 0;
  let currentNumCnt = 0;
  let beforeNumber = -1;
  let isDupMode = false;

  while (cnt < array.length) {
    if (beforeNumber !== array[cnt]) {
      currentNumCnt = 1;
    } else {
      currentNumCnt++;
    }

    if (currentNumCnt === modeRepeat) {
      if (modeValue !== array[cnt]) {
        isDupMode = true;
      }
    }

    if (currentNumCnt > modeRepeat) {
      modeValue = array[cnt];
      modeRepeat = currentNumCnt;
      isDupMode = false;
    }
    beforeNumber = array[cnt];
    cnt++;
  }
  if (isDupMode) return -1;
  return modeValue;
}

// 1. 앞에서부터 차례대로 원소를 확인하며 갯수를 센다.
// 2. 최빈값을 그때그때 기억한다.
