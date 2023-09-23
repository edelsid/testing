export default class NumType {
  constructor(number) {
    this.number = Array.from(number);
  }

  typeSearch() {
    const types = {
      mir: ['2'],
      express: ['34', '37'],
      maestro: ['50', '56', '57', '58', '63', '67'],
      mastercard: ['51', '52', '53', '54', '55'],
      union: ['62'],
      visa: ['4'],
    };
    let type = '';
    let sum = '';
    if (this.number.length >= 2) {
      const firstEl = this.number.slice(0, 2);
      sum = firstEl.join('');
    }
    for (const [key, value] of Object.entries(types)) {
      if (value.includes((this.number[0])) || value.includes(sum)) {
        type = key;
        break;
      }
    }
    return type;
  }
}
