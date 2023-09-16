import CardNumber from '../numbers';
import NumType from '../types';

const dataList = [
  ['345441380164525', true],
  ['345441380164524', false],
  ['1', false],
  ['40240071658301184446', false],
  ['5893792361057616', true],
  ['4024007127456797059', true],
];

const handler = test.each(dataList);

handler('testing verification', (number, expected) => {
  const cardNumber = new CardNumber(number);
  expect(cardNumber.verification()).toBe(expected);
});

const dataListVer = [
  ['4024007165830117', 'visa'],
  ['5146956695348919', 'mastercard'],
  ['2345', 'mir'],
  ['7', ''],
  ['6763669754790299', 'maestro'],
  ['345441380164525', 'express'],
  ['62789', 'union'],
];

const handlerVer = test.each(dataListVer);

handlerVer('testing types', (number, expected) => {
  const cardNumber = new NumType(number);
  expect(cardNumber.typeSearch()).toBe(expected);
});
