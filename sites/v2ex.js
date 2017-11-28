const puppeteer = require('puppeteer');
const assert = require('assert');

const config = require('../config');
const { orc } = require('../remote/baidu_ai');

const { urls: URLS, elements: ELES } = config.sites.v2ex;

let retryCount = 3;

const getCaptchaWords = async (page) => {
  await page.waitForSelector(ELES.captchaImage);

  const captchaElement = await page.$(ELES.captchaImage);
  const captchaBuffer = await captchaElement.screenshot();
  const captchaBase64 = captchaBuffer.toString('base64');
  console.log('getCaptchaWords.captchaBase64', { captchaBase64 });

  const orcResult = await orc.webImage(captchaBase64, { language_type: 'ENG' });
  console.log('getCaptchaWords.orcResult', JSON.stringify(orcResult));
  // @ts-ignore
  const captchaWords = orc.parseWordsResult(orcResult);

  return captchaWords;
};

const assertLoginFailed = async (page) => {
  // element not exists
  if (!await page.$(ELES.loginIssue)) {
    return false;
  }

  const message = await page.$eval(ELES.loginIssue, div => div.innerText);
  console.log('isLoginFailed.message', { message });
  assert(message === '', 'empty mean not error');
  return true;
};

const loginProcess = async (page) => {
  await page.goto(URLS.signin);
  try {
    const captchaWords = await getCaptchaWords(page);
    console.log('captchaWords', { captchaWords });

    const { username, password } = config.profile;
    await page.type(ELES.usernameInput, username);
    await page.type(ELES.passwordInput, password);
    await page.type(ELES.captchaInput, captchaWords);

    await page.screenshot({ path: './dev-images/v2ex-before-login.png' });
    await page.click(ELES.loginButton);
    await page.waitFor(2000);

    await assertLoginFailed(page);
  } catch (e) {
    if (retryCount < 0) {
      throw new Error('login failed and out of retry');
    }

    retryCount -= 1;
    console.log('loginProcess.retryCount', { retryCount });
    await loginProcess(page);
  }
};

const run = async () => {
  const browser = await puppeteer.launch(config.puppeteer);
  const page = await browser.newPage();

  // login with retry
  await loginProcess(page);

  await page.waitForSelector(ELES.gotoDailySignin);
  await page.screenshot({ path: './dev-images/v2ex-after-login.png' });

  await page.click(ELES.gotoDailySignin);
  await page.waitForSelector(ELES.dailySigninButton);
  await page.screenshot({ path: './dev-images/v2ex-daily-mission-page.png' });
  await page.click(ELES.dailySigninButton);
  await page.waitForSelector(ELES.dailySigninResult);
  await page.screenshot({ path: './dev-images/v2ex-daily-mission-result.png' });
  //   .evaluate(selector => document.querySelector(selector).innerText, ELES.dailySigninResult)

  await browser.close();
};

module.exports = {
  run,
};
