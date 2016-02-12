(function() {
  'use strict'

  var i;
  var range1 = 0;
  var range2 = 0;
  var range3 = 0;
  var range4 = 0;
  var range5 = 0;

  function Split(inputArr) {

    for (i = 0; i < inputArr.length; i++) {
      if (inputArr[i] > 0 && inputArr[i] < 11) {
        range1++;
      }
      if (inputArr[i] > 10 && inputArr[i] < 21) {
        range2++;
      }
      if (inputArr[i] > 20 && inputArr[i] < 31) {
        range3++;
      }
      if (inputArr[i] > 30 && inputArr[i] < 41) {
        range4++;
      }
      if (inputArr[i] > 40 && inputArr[i] < 51) {
        range5++;
      }
    }
  }
  var inputArr = [];
  inputArr.push(10, 15, 5, 12, 22, 35, 39, 44, 46, 42, 2);
  Split(inputArr);
  console.log(' 1:10', +range1);
  console.log('11:20', +range2);
  console.log('21:30', +range3);
  console.log('31:40', +range4);
  console.log('41:50', +range5);
})();
