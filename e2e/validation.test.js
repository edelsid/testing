import puppeteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000);

describe('Right and wrong code verification', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:8080';

  beforeEach(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
      headless: 'new',
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('right code validation', async () => {
    await page.goto(baseUrl);
    await page.waitForSelector('.input_form');

    const form = await page.$('.input_form');
    const input = await form.$('.form-control');
    const submit = await form.$('.btn');

    await input.type('4024007165830117');
    await submit.click();

    await page.waitForSelector('.correct');
  });

  test('wrong code validation', async () => {
    await page.goto(baseUrl);
    await page.waitForSelector('.input_form');

    const form = await page.$('.input_form');
    const input = await form.$('.form-control');
    const submit = await form.$('.btn');

    await input.type('4024007165830118');
    await submit.click();

    await page.waitForSelector('.incorrect');
  });

  afterEach(async () => {
    await browser.close();
    server.kill();
  });
});
