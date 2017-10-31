# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.3.0"></a>
# [2.3.0](https://github.com/yidinghan/daily-signin/compare/v2.2.0...v2.3.0) (2017-10-31)


### Bug Fixes

* **docker:** missing images directory ([c73d7c7](https://github.com/yidinghan/daily-signin/commit/c73d7c7))


### Features

* **config:** use envConfig to overwrite config in startup ([76dc340](https://github.com/yidinghan/daily-signin/commit/76dc340))
* **smzdm:** log out all childFrames[].name ([f0b4b31](https://github.com/yidinghan/daily-signin/commit/f0b4b31))
* **smzdm:** try to waitFor more time to load out iframe ([fb8237e](https://github.com/yidinghan/daily-signin/commit/fb8237e))



<a name="2.2.0"></a>
# [2.2.0](https://github.com/yidinghan/daily-signin/compare/v2.1.0...v2.2.0) (2017-10-25)


### Features

* **smzdm:** add waitUntil to all navigation ([b146acd](https://github.com/yidinghan/daily-signin/commit/b146acd))
* **smzdm:** waitUntil: 'networkidle' ([0b3ee43](https://github.com/yidinghan/daily-signin/commit/0b3ee43))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/yidinghan/daily-signin/compare/v2.0.0...v2.1.0) (2017-10-25)


### Bug Fixes

* **docker:** miising chrome dependencies ([09a3338](https://github.com/yidinghan/daily-signin/commit/09a3338))


### Features

* **v2ex:** logout captchaBase64 for debug ([ebafeda](https://github.com/yidinghan/daily-signin/commit/ebafeda))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/yidinghan/daily-signin/compare/v1.4.0...v2.0.0) (2017-10-23)


### Bug Fixes

* **baidu:** error usage in parse process ([f551a97](https://github.com/yidinghan/daily-signin/commit/f551a97))
* **puppeteer:** mirror boolean on headless ([339bf9d](https://github.com/yidinghan/daily-signin/commit/339bf9d))
* **v2ex:** error selector of login ([b1eb55e](https://github.com/yidinghan/daily-signin/commit/b1eb55e))
* **v2ex:** if selector exists first ([16b531a](https://github.com/yidinghan/daily-signin/commit/16b531a))


### Features

* **baidu:** init orc client ([95a28ad](https://github.com/yidinghan/daily-signin/commit/95a28ad))
* **smzdm:** finish daily signin process ([eebecd0](https://github.com/yidinghan/daily-signin/commit/eebecd0))
* **smzdm:** init home page ([a24087a](https://github.com/yidinghan/daily-signin/commit/a24087a))
* **smzdm:** inside login frame ([d9c7937](https://github.com/yidinghan/daily-signin/commit/d9c7937))
* **smzdm:** try to click login button ([40a37c4](https://github.com/yidinghan/daily-signin/commit/40a37c4))
* **v2ex:** add capture image selector ([c40fdbb](https://github.com/yidinghan/daily-signin/commit/c40fdbb))
* **v2ex:** add retry login process ([86555f4](https://github.com/yidinghan/daily-signin/commit/86555f4))
* **v2ex:** complete mission part ([786b1f1](https://github.com/yidinghan/daily-signin/commit/786b1f1))
* **v2ex:** get captcha image ([bf183c7](https://github.com/yidinghan/daily-signin/commit/bf183c7))
* **v2ex:** type username ([cab6619](https://github.com/yidinghan/daily-signin/commit/cab6619))
* **v2ex:** use innerText ([4533d13](https://github.com/yidinghan/daily-signin/commit/4533d13))



<a name="1.4.0"></a>
# [1.4.0](https://github.com/yidinghan/daily-signin/compare/v1.2.0...v1.4.0) (2017-07-03)


### Bug Fixes

* **docker:** resume single stage dockerfile ([e0e7569](https://github.com/yidinghan/daily-signin/commit/e0e7569))
* **docker:** should use --force with npm[@5](https://github.com/5) ([65fc0b6](https://github.com/yidinghan/daily-signin/commit/65fc0b6))
* **smdzm:** new front end page ([f058ab9](https://github.com/yidinghan/daily-signin/commit/f058ab9))


### Features

* **docker:** use 8.1.2 as base img ([c3e3dfa](https://github.com/yidinghan/daily-signin/commit/c3e3dfa))
* **docker:** use multi stage to build images ([95426c5](https://github.com/yidinghan/daily-signin/commit/95426c5))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/yidinghan/daily-signin/compare/v1.2.0...v1.3.0) (2017-05-12)


### Features

* **docker:** use multi stage to build images ([a3a4e8d](https://github.com/yidinghan/daily-signin/commit/a3a4e8d))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/yidinghan/daily-signin/compare/v1.1.0...v1.2.0) (2017-04-21)


### Features

* **config:** support decode base64 password ([4406050](https://github.com/yidinghan/daily-signin/commit/4406050))



<a name="1.1.0"></a>
# 1.1.0 (2017-04-21)


### Bug Fixes

* electron could not headless ([2cdbffc](https://github.com/yidinghan/daily-signin/commit/2cdbffc))
* error comma ([ae2ca1a](https://github.com/yidinghan/daily-signin/commit/ae2ca1a))
* error command ([7c5f5dd](https://github.com/yidinghan/daily-signin/commit/7c5f5dd))
* error config param name ([d11faa3](https://github.com/yidinghan/daily-signin/commit/d11faa3))
* missing Separator‘ ([1dc5cd3](https://github.com/yidinghan/daily-signin/commit/1dc5cd3))
* zsh env taken ([ff4f5c4](https://github.com/yidinghan/daily-signin/commit/ff4f5c4))
* **smzdm:** try to wait ajax complete ([b4578af](https://github.com/yidinghan/daily-signin/commit/b4578af))
* **v2ex:** .evaluate after .wait ([373e132](https://github.com/yidinghan/daily-signin/commit/373e132))


### Features

* **smzdm:** use inntertext to debug ([98b7dfd](https://github.com/yidinghan/daily-signin/commit/98b7dfd))
* disable images in nightmare browser ([efee207](https://github.com/yidinghan/daily-signin/commit/efee207))
* finish v2ex daily mission ([33c75b7](https://github.com/yidinghan/daily-signin/commit/33c75b7))
* init .dockerignore ([91c81f9](https://github.com/yidinghan/daily-signin/commit/91c81f9))
* init dockerfile ([dc2af2f](https://github.com/yidinghan/daily-signin/commit/dc2af2f))
* init index.js ([3e779cb](https://github.com/yidinghan/daily-signin/commit/3e779cb))
* init smzdm.js ([eabfe8a](https://github.com/yidinghan/daily-signin/commit/eabfe8a))
* init v2ex file ([1543cd4](https://github.com/yidinghan/daily-signin/commit/1543cd4))
* not catch error ([27b8bae](https://github.com/yidinghan/daily-signin/commit/27b8bae))
* npm clean after install ([6aaa350](https://github.com/yidinghan/daily-signin/commit/6aaa350))
* npm init ([ea2e904](https://github.com/yidinghan/daily-signin/commit/ea2e904))
* **jd:** finish checkin process ([fd74cb5](https://github.com/yidinghan/daily-signin/commit/fd74cb5))
* **jd:** finish login process ([560e223](https://github.com/yidinghan/daily-signin/commit/560e223))
* **jd:** init jd config and file ([566ef76](https://github.com/yidinghan/daily-signin/commit/566ef76))
* print error detail ([01cece6](https://github.com/yidinghan/daily-signin/commit/01cece6))
* **jd jr:** finish jd jr script ([62f9647](https://github.com/yidinghan/daily-signin/commit/62f9647))
* **jd jr:** init config and site file ([754c019](https://github.com/yidinghan/daily-signin/commit/754c019))
* use end as exit ([f236c34](https://github.com/yidinghan/daily-signin/commit/f236c34))
* **smzdm:** finish smzdm file ([120cefd](https://github.com/yidinghan/daily-signin/commit/120cefd))
* use npm start ([c853fc1](https://github.com/yidinghan/daily-signin/commit/c853fc1))
* **smzdm:** pre login form click ([b28da99](https://github.com/yidinghan/daily-signin/commit/b28da99))
* **smzdm:** use nightmare-iframe-manager ([cd80503](https://github.com/yidinghan/daily-signin/commit/cd80503))
* **v2ex:** improve dailySigninResult element ([e4b6e4a](https://github.com/yidinghan/daily-signin/commit/e4b6e4a))
