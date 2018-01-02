const puppeteer = require('puppeteer');

const config = require('../config');

const { urls: URLS, elements: ELES } = config.sites.jdjr;

const loginProcess = async (page) => {
  await page.goto(URLS.home);

  await page.waitForSelector(ELES.usernameInput);
  console.log('loginProcess.waitForSelector.usernameInput.after');

  const { username, password } = config.profile;
  await page.type(ELES.usernameInput, username);
  await page.type(ELES.passwordInput, password);
  console.log('loginProcess.type.usernameAndPassword.after');

  await page.click(ELES.loginButton);
  console.log('loginProcess.click.loginButton.after');
  await page.waitForNavigation({ waitUntil: 'networkidle2' });
  console.log('loginProcess.waitForNavigation.after');
};

const run = async () => {
  const browser = await puppeteer.launch(config.puppeteer);
  const page = await browser.newPage();
  await page.setViewport(config.puppeteer.viewport);

  await loginProcess(page);

  await page.waitForSelector(ELES.checkinSuccess);
  console.log('run.waitForSelector.checkinSuccess.after');

  const checkinSuccessMessage = await page.$eval(
    ELES.checkinSuccess,
    div => div.innerText,
  );
  console.log('run.checkinSuccess.message', {
    message: checkinSuccessMessage,
  });

  await browser.close();
};

module.exports = {
  run,
};
