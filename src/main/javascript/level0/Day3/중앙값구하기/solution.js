// 입력은 [9,-1, 0]
function solution(array) {
  let arrayCnt = 0;
  let newArray = [];
  while (arrayCnt < array.length) {
    let minNumber = 1000;
    // 배열 중 가장 작은 값을 찾는다.
    let cnt = 0;
    while (cnt < array.length) {
      if (minNumber > array[cnt]) {
        minNumber = array[cnt];
      }
      cnt++;
    }
    // 새 배열에 최솟값을 넣는다
    newArray.push(minNumber);

    // 찾은 값을 지우기보단 엄청 큰 숫자로 바꿔서 로직이 못 찾게 만든다.
    let cnt2 = 0;
    while (cnt2 < array.length) {
      if (minNumber === array[cnt2]) {
        array[cnt2] = 1001;
        break;
      }
      cnt2++;
    }
    arrayCnt++;
  }
  console.log('new Array : ', newArray);
  return newArray[Math.floor(array.length / 2)];
}

// 1.정렬
// 1-1. 배열 중 가장 작은 값을 찾는다.
// 1-2. 찾으면 새 배열에 넣는다.
// 1-3. 원래 배열에 찾은 값은 지운다.
// 1-4. 만약 원래 배열 길이만큼 반복했으면 끝낸다. 아니면 1-1로 돌아간다.

// 2. 가운데 값 꺼내기
// 2. 배열 길이가 5
// array[2]
// 배열 길이가 3
// array[1]
// 배열 길이가 n
// array[Math.floor(n / 2)]
