const config = {
  baidu_ai: {
    app_id: process.env.BAIDU_API_ID,
    api_key: process.env.BAIDU_API_KEY,
    secret_key: process.env.BAIDU_SECRET_KEY,
  },
  site: process.env.SITE || 'smzdm',
  isBase64: Boolean(process.env.ISBASE64),
  profile: {
    username: process.env.DUSERNAME,
    password: process.env.DPASSWORD,
  },
  sites: {
    jdjr: {
      urls: {
        home: 'http://vip.jr.jd.com',
      },
      elements: {
        gotoLogin: '#loginbar > a.link-login',
        usernameLoginButton:
          '#content > div > div.w > div > div.login-tab.login-tab-r > a',
        usernameInput: '#loginname',
        passwordInput: '#nloginpwd',
        loginButton: '#loginsubmit',
        checkinBtn: '#index-qian-btn',
        checkinSuccess:
          'body > div.mem-sign.bag-popup > div.member-sign > div.sign-center > div > p',
      },
    },
    jd: {
      urls: {
        home: 'http://vip.jd.com',
      },
      elements: {
        gotoLogin: '#ttbar-login > a.link-login',
        usernameLoginButton:
          '#content > div > div.w > div > div.login-tab.login-tab-r > a',
        usernameInput: '#loginname',
        passwordInput: '#nloginpwd',
        loginButton: '#loginsubmit',
        // "1113"
        jingBean: '#userJdNum',
        checkinBtn: '#checkinBtn > i',
        checkinSuccess:
          'body > div.ui-dialog.checkin-dialog.checkin.zoomIn.animated > div.ui-dialog-content > h2',
      },
    },
    smzdm: {
      urls: {
        home: 'http://www.smzdm.com',
        login: 'https://zhiyou.smzdm.com/user/login/ajax_check',
      },
      elements: {
        login:
          '#index-head > div.J_entry.entry > div.user-wrap > div.user > div.user-info.not-login.J_info > a',
        loginIframeID: '#J_login_iframe',
        loginIframeName: 'J_login_iframe',
        usernameInput: '#username',
        passwordInput: '#password',
        loginButton: '#login_submit',
        userInfo:
          '#index-head > div.J_entry.entry > div.user-wrap > div.user > div.user-info.J_info',
        usernameLink:
          '#index-head > div.J_entry.entry > div.user-wrap > div.user > div.user-name.J_name > a',
        dailySigninButton:
          '#index-head > div.J_entry.entry > div.old-entry > a',
      },
    },
    v2ex: {
      urls: {
        home: 'https://www.v2ex.com/',
        signin: 'https://www.v2ex.com/signin',
        dailyMission: 'https://www.v2ex.com/mission/daily',
      },
      elements: {
        captchaImage:
          '#Main > div.box > div.cell > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > div:nth-child(1)',
        usernameInput:
          '#Main > div.box > div.cell > form > table > tbody > tr:nth-child(1) > td:nth-child(2) > input',
        passwordInput:
          '#Main > div.box > div.cell > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > input',
        captchaInput:
          '#Main > div.box > div.cell > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > input',
        loginIssue: '#Main > div.box > div.problem',
        loginButton:
          '#Main > div.box > div.cell > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > input.super.normal.button',
        gotoDailySignin: '#Rightbar > div:nth-child(4) > div > a',
        dailySigninButton: '#Main > div.box > div:nth-child(2) > input',
        dailySigninResult: '#Main > div.box > div.message',
      },
    },
  },
  puppeteer: {
    headless: process.env.NODE_ENV !== 'dev',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    timeout: 10000, // 10s
    // ignoreHTTPSErrors: true,
    // executablePath: 'google-chrome-unstable',
    viewport: {
      width: 1920,
      height: 1080,
    },
    dumpio: process.env.NODE_ENV !== 'dev',
  },
};

if (config.isBase64) {
  config.profile.password = Buffer.from(
    config.profile.password,
    'base64',
  ).toString();
}

module.exports = config;
