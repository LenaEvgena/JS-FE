function getAverage() {
  let avg = 0;
  let count = 0;

  return function(x) {
    count++;
    avg += x;
    return avg / count;
  }
}

let runningAverage = getAverage();

runningAverage(10);
runningAverage(11);
runningAverage(12);
