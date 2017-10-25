const puppeteer = require('puppeteer');

const config = require('../config');

const { urls: URLS, elements: ELES } = config.sites.smzdm;

// const imageSuffix = ['.png', '.jpg'];

const getLoginFrame = (page) => {
  const childFrames = page.mainFrame().childFrames();
  console.log('getLoginFrame.childFrames.length', childFrames.length);
  const loginFrame = childFrames.find(frame => frame.name() === ELES.loginIframeName);
  return loginFrame;
};

const framePageMethods = {
  type: async (frame, selector, text) => {
    const element = await frame.$(selector);
    await element.type(text);
  },
  click: async (frame, selector) => {
    const element = await frame.$(selector);
    await element.click();
  },
};

const loginProcess = async (page) => {
  await page.goto(URLS.home);
  await page.screenshot({ path: './dev-images/smzdm-home.png' });

  // for skip activity
  console.log('loginProcess.waitfor.5s');
  await page.waitFor(5000);
  console.log('loginProcess.waitfor.loginselector');
  await page.waitForSelector(ELES.login);
  await page.waitFor(500);
  // await page.click(ELES.login, {clickCount: 2, delay: 10});
  await page.click(ELES.login);
  await page.waitForSelector(ELES.loginIframeID);
  await page.screenshot({ path: './dev-images/smzdm-login-iframe.png' });

  const loginFrame = getLoginFrame(page);
  console.log('loginProcess.loginFrame.name', loginFrame.name());

  const { username, password } = config.profile;
  await loginFrame.waitForSelector(ELES.usernameInput);
  await page.screenshot({
    path: './dev-images/smzdm-before-fill-username.png',
  });
  await framePageMethods.type(loginFrame, ELES.usernameInput, username);
  await framePageMethods.type(loginFrame, ELES.passwordInput, password);

  await page.screenshot({ path: './dev-images/smzdm-before-login.png' });
  await framePageMethods.click(loginFrame, ELES.loginButton);
};

// const abortImages = async (page) => {
//   await page.setRequestInterceptionEnabled(true);
//   page.on('request', (interceptedRequest) => {
//     const isImage = !!imageSuffix.find(suffix =>
//       interceptedRequest.url.endsWith(suffix));
//     if (isImage) {
//       interceptedRequest.abort();
//     } else {
//       interceptedRequest.continue();
//     }
//   });
// };

const run = async () => {
  const browser = await puppeteer.launch(config.puppeteer);
  const page = await browser.newPage();
  await page.setViewport(config.puppeteer.viewport);
  // await abortImages(page);

  // login with retry
  await loginProcess(page);

  await page.waitForNavigation();
  await page.screenshot({
    path: './dev-images/smzdm-after-login-navigation.png',
  });
  await page.waitForSelector(ELES.userInfo);

  await page.click(ELES.dailySigninButton);
  await page.screenshot({ path: './dev-images/smzdm-after-click-signin.png' });
  await page.waitFor(500);

  const dailySigninButtonMessage = await page.$eval(
    ELES.dailySigninButton,
    // @ts-ignore
    div => div.innerText,
  );
  console.log('smzdm.dailySigninButton.message', {
    message: dailySigninButtonMessage,
  });

  await browser.close();
};

module.exports = {
  run,
};
