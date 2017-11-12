# daily-signin

[![Docker Automated buil](https://img.shields.io/docker/automated/playdingnow/daily-signin.svg?style=flat-square)](https://hub.docker.com/r/playdingnow/daily-signin/)
[![Docker Build Statu](https://img.shields.io/docker/build/playdingnow/daily-signin.svg?style=flat-square)](https://hub.docker.com/r/playdingnow/daily-signin)
[![Docker Pulls](https://img.shields.io/docker/pulls/playdingnow/daily-signin.svg?style=flat-square)](https://hub.docker.com/r/playdingnow/daily-signin)

smzdm, v2ex, jd jr, jd daily signin script

什么值得买, v2ex, 京东金融, 京东每日签到脚本

# Getting Start

通过配置参数，便可一键使用

## Enviroment

| NAME| CN | EN  |
| --- | --- | --- |
| SITE | 默认是 smzdm，[avaliable sites](#avaliable-sites) | smzdm or v2ex or jd, [avaliable sites](#avaliable-sites) |
| DUSERNAME | 对应站点的用户名 | username of your account |
| DPASSWORD | 对应站点的密码 | password of yuur account |
| ISBASE64 | 是否对需要用 base64 decode 密码 | Whether it is necessary to use the base64 decode password |
| BAIDU_API_ID | 百度 SDK 里面需要到的 API ID， | the API ID that provide by baidu api |
| BAIDU_API_KEY | 百度 SDK 里面需要到的 API KEY | the API KEY that provide by baidu api |
| BAIDU_SECRET_KEY | 百度 SDK 里面需要到的 API SECRET KEY | the API SECRET KEY that provide by baidu api |
| DEBUG | NODEJS 常见的 debug flag，可以用 `puppeteer:page` or `puppeteer:frame` 来查看更多信息 | NODE JS common debugging signs, you can use `puppeteer:page` or `puppeteer:frame` to see more information |


## Avaliable Sites

 - [smzdm](https://smzdm.com)
 - [v2ex](https://v2ex.com), (require baidu ai api id
 - [jd](https://vip.jd.com)
 - [jdjr](https://vip.jr.jd.com)

## About Baidu API ID

 - 有些网站的登陆用到了图形验证码（例如 v2ex )
 - 测试了一下，百度 AI 的 ORC 识别效果是最好的
 - 虽然识别率也不是 90%，甚至需要 3-5 次尝试才能识别出来一张，但是总好过识别不出来的
 - 所以，对于验证码的识别，直接使用了百度 AI 的 [SDK](https://github.com/Baidu-AIP/nodejs-sdk)
 - 至于这个 sdk 用到的三个 KEY 从哪里来，可以看[官方文档](http://ai.baidu.com/docs#/Begin/top)

## Docker

```shell
docker run --rm \
  -e SITE={{site:smzdm}} \
  -e DUSERNAME={{username}} \
  -e DPASSWORD={{password}} \
  playdingnow/daily-signin
```

or

```shell
docker run --rm \
  -e SITE={{site:smzdm}} \
  -e DUSERNAME={{username}} \
  -e DPASSWORD={{password}} \ # encoded base64 password
  -e ISBASE64=1 \
  playdingnow/daily-signin
```

### Docker Example Output

![](http://om4h4iqhe.bkt.clouddn.com/daily-signin-docker-output.png)

# Update Notes

## v2

 - 最近 v2ex 的登陆用上了验证码，就用了一下之前一直想用的 baidu ai

 - 恰好 chrome headless 支持的 modules 也很多，就尝试使用了 puppeteer 来重写这个签到脚本

 - 经过实践检验，确实能跑起来
