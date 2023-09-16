import puppeteer from 'puppeteer';

describe('Right and wrong code verification', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('right code validation', async () => {
    await page.goto('http://localhost:8080');
    await page.waitForSelector('.input_form');

    const form = await page.$('.input_form');
    const input = await form.$('.form-control');
    const submit = await form.$('.btn');

    await input.type('4024007165830117');
    await submit.click();

    await page.waitForSelector('.correct');
  }, 15000);

  test('wrong code validation', async () => {
    await page.goto('http://localhost:8080');
    await page.waitForSelector('.input_form');

    const form = await page.$('.input_form');
    const input = await form.$('.form-control');
    const submit = await form.$('.btn');

    await input.type('4024007165830118');
    await submit.click();

    await page.waitForSelector('.incorrect');
  }, 15000);

  afterEach(async () => {
    await browser.close();
  });
});
