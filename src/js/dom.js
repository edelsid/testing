import CardNumber from './numbers';
import NumType from './types';

export default class Widget {
  constructor(element) {
    if (typeof element === 'string') {
      // eslint-disable-next-line no-param-reassign
      element = document.querySelector(element);
    }
    this.element = element;
    this.cards = document.querySelectorAll('.card');
    this.inputField = document.querySelector('.form-control');
    this.verifyBtn = document.querySelector('.btn');
    this.marker = document.querySelector('.marker');

    this.onClick = this.onClick.bind(this);
    this.onPress = this.onPress.bind(this);
    this.verifyBtn.addEventListener('click', this.onClick);
    this.inputField.addEventListener('keyup', this.onPress);
  }

  onPress(e) {
    e.preventDefault();
    if (e.key === 'Enter') {
      this.verifyBtn.click();
    }
    const cardNumber = new NumType(this.inputField.value);
    const type = cardNumber.typeSearch();
    this.typeDisplay(type);
  }

  onClick() {
    if (this.inputField.value === '') {
      // eslint-disable-next-line no-alert
      alert('Поле номера карты пусто');
      if (this.marker.classList.contains('incorrect') || this.marker.classList.contains('correct')) {
        this.marker.classList.value = 'marker undefined';
      }
      return false;
    }
    const cardNumber = new CardNumber(this.inputField.value);
    if (cardNumber.verification() === false) {
      this.marker.classList.remove('undefined');
      this.marker.classList.remove('correct');
      this.marker.classList.add('incorrect');
    } else {
      this.marker.classList.remove('undefined');
      this.marker.classList.remove('incorrect');
      this.marker.classList.add('correct');
    }
    return true;
  }

  typeDisplay(type) {
    for (const element of this.cards) {
      if (element.classList.contains(type) === false && type !== '') {
        element.classList.add('greyed');
      } else if (element.classList.contains(type) === true && type !== '') {
        element.classList.remove('greyed');
      } else if (type === '' && element.classList.contains('greyed')) {
        element.classList.remove('greyed');
      }
    }
  }
}
