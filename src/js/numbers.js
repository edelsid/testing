export default class CardNumber {
  constructor(number) {
    this.number = number;
  }

  verification() {
    if (this.number.length < 13 || this.number.length > 19 || this.algorithm() % 10 !== 0) {
      return false;
    }
    return true;
  }

  algorithm() {
    const arr = Array.from(this.number);
    const odd = [];
    const even = [];
    const oddDoubled = [];
    if (arr.length % 2 !== 0) {
      for (let i = 0; i < arr.length; i += 2) {
        odd.push(Number(arr[i + 1]));
        even.push(Number(arr[i]));
      }
      odd.pop();
    } else {
      for (let i = 0; i < arr.length; i += 2) {
        odd.push(Number(arr[i]));
        even.push(Number(arr[i + 1]));
      }
    }

    for (const element of odd) {
      let doubled = element * 2;
      if (doubled >= 10) {
        const doubledArr = Array.from(String(doubled));
        doubled = Number(doubledArr[0]) + Number(doubledArr[1]);
      }
      oddDoubled.push(doubled);
    }

    const sumArr = oddDoubled.concat(even);
    const sum = sumArr.reduce((acc, currentValue) => acc + currentValue, 0);

    return sum;
  }
}
