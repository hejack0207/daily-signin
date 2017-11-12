const puppeteer = require('puppeteer');

const config = require('../config');

const { urls: URLS, elements: ELES } = config.sites.jd;

const loginProcess = async (page) => {
  await page.goto(URLS.home);
  await page.waitForSelector(ELES.usernameLoginButton);
  console.log('loginProcess.waitForSelector.usernameLoginButton.after');
  await page.click(ELES.usernameLoginButton);
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

  //   .click(ELES.checkinBtn)
  //   .wait(ELES.checkinSuccess)
  //   // "签到成功" if success
  //   .evaluate(selector => document.querySelector(selector).innerText, ELES.checkinSuccess)
  //   .end();

  // wait for debug
  await page.waitFor(5000);
  await browser.close();
};

module.exports = {
  run,
};
