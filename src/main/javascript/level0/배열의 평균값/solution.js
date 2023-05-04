function solution(numbers) {
  var answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == numbers[0]) {
      answer = numbers[0];
      continue;
    }
    answer = answer + numbers[i];
  }
  return answer / numbers.length;
}
