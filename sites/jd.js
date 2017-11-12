const puppeteer = require('puppeteer');

const config = require('../config');

const { urls: URLS, elements: ELES } = config.sites.jd;

const loginProcess = async (page) => {
  await page.goto(URLS.home);
};

const run = async () => {
  // const { username, password } = config.profile;
  const browser = await puppeteer.launch(config.puppeteer);
  const page = await browser.newPage();
  await page.setViewport(config.puppeteer.viewport);

  await loginProcess(page);

  // return nightmare
  //   .goto(URLS.home)
  //   .wait(ELES.gotoLogin)
  //   .click(ELES.gotoLogin)
  //   .wait(ELES.usernameLoginButton)
  //   .click(ELES.usernameLoginButton)
  //   .wait(ELES.usernameInpu)
  //   .type(ELES.usernameInput, username)
  //   .type(ELES.passwordInput, password)
  //   .click(ELES.loginButton)
  //   .wait(ELES.checkinBtn)
  //   .click(ELES.checkinBtn)
  //   .wait(ELES.checkinSuccess)
  //   // "签到成功" if success
  //   .evaluate(selector => document.querySelector(selector).innerText, ELES.checkinSuccess)
  //   .end();
  await browser.close();
};

module.exports = {
  run,
};
