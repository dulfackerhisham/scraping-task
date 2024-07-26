const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: false,
        // useDataDir: './tmp'
    });
    const page = await browser.newPage();

    await page.goto('https://in.linkedin.com/');

    // selecting jobs tab and navigating to that page
    await page.click('xpath//html/body/nav/ul/li[4]/a')

    
    console.log('helloooo');

    // await browser.close();
};

run();