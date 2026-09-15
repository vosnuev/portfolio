const { chromium } = require('/Users/vosnuevo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert = require('node:assert/strict');
(async () => {
 const browser = await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
 const page = await browser.newPage({viewport:{width:1440,height:1000}});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:8765');
 await page.waitForLoadState('networkidle');
 assert.equal(await page.locator('.project-card').count(),4,'Four project cards must render');
 assert.ok(Math.abs(await page.locator('.about-grid p').first().evaluate(e=>parseFloat(getComputedStyle(e).fontSize))-33.333)<.1,'Body must use 25pt');
 for(const id of ['cozy','agent','churn','parking']){
  await page.locator(`.project-card[href="#project/${id}"]`).click();
  await page.waitForSelector('#project-view:not([hidden])');
  assert.ok(await page.locator('#detail-title').textContent());
  assert.equal(await page.locator('.architecture-node').count(),5);
  assert.equal(await page.locator('.detail-decisions .decision').count(),3);
  await page.locator('.back-link').click();
  await page.waitForSelector('#home-view:not([hidden])');
  assert.equal(await page.evaluate(()=>document.activeElement.getAttribute('href')),`#project/${id}`,'Keyboard focus returns to project');
 }
 await page.goto('http://127.0.0.1:8765/#project/agent');
 await page.waitForSelector('#detail-title');
 assert.equal(await page.locator('.chart-row').count(),3);
 await page.goto('http://127.0.0.1:8765/#project/not-found');
 assert.equal(await page.locator('#home-view').isVisible(),true);
 await page.setViewportSize({width:390,height:844});
 for(const hash of ['#home','#work','#about','#project/cozy','#project/agent','#project/churn','#project/parking']){
  await page.goto('http://127.0.0.1:8765/'+hash);
  await page.waitForTimeout(100);
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`No horizontal overflow: ${hash}`);
 }
 assert.deepEqual(errors,[],'No browser errors');
 await page.goto('http://127.0.0.1:8765/#home');
 await page.waitForTimeout(1000);
 await page.screenshot({path:'/tmp/portfolio-mobile-top.png'});
 await page.screenshot({path:'/tmp/portfolio-mobile.png',fullPage:true});
 await page.setViewportSize({width:1440,height:1000});
 await page.goto('http://127.0.0.1:8765/#home');
 await page.screenshot({path:'/tmp/portfolio-desktop.png',fullPage:true});
 await page.goto('http://127.0.0.1:8765/#project/agent');
 await page.locator('.chart-shell').scrollIntoViewIfNeeded();
 await page.screenshot({path:'/tmp/portfolio-chart.png'});
 console.log('PASS: 4 project routes, return navigation, direct route, unknown route, 25pt body, 7 mobile overflow checks, no browser errors.');
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
