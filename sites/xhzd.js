#!/usr/bin/env node
'use strict';

const puppeteer = require('puppeteer');
const config = require('../config');
  
const run = async () => {

  var p = require('commander');
  p.version('1.0.0')
    .usage('cmd\n E.g. xhzd -w hanzi\n\n')
    .option("-z,--hanzi <hanzi>");
  p.parse(process.argv);
  console.log("hanzi:"+p.hanzi);

  const browser = await puppeteer.launch(config.puppeteer);
  const page = await browser.newPage();
  await page.setViewport(config.puppeteer.viewport);

  await page.goto("http://tool.httpcn.com/Zi/");

  await page.waitForSelector("#wd");

  await page.type("#wd", p.hanzi);
  await page.click("#zisubmit");
  await page.waitForNavigation({ waitUntil: 'networkidle2' });

  await page.screenshot({ path: './dev-images/xhzd.png' });
  console.log('png saved!');

  await browser.close();
};

run().catch((error) => {
    console.error('CATCH ERROR: ', error);
    process.exit(1);
});

module.exports = {
  run,
};
