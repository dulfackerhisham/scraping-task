const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: false,
        // useDataDir: './tmp'
    });
    const page = await browser.newPage();

    await page.goto('https://in.linkedin.com/');



    // waiting for desired selector
    await page.waitForSelector('.top-nav-menu', { visible: true });

    // selecting jobs tab and navigating to that page
    await page.click('xpath//html/body/nav/ul/li[4]/a')


    
    await page.type('#job-search-bar-keywords', "web developer", {delay: 120})

    await page.click('xpath///*[@id="jobs-search-panel"]/form/button')


    // waiting for job search results to be loaded
    await page.waitForSelector('.jobs-search__results-list', { visible: true });


    const jobDetails = await page.evaluate(() => Array.from(document.querySelectorAll('.jobs-search__results-list .base-search-card__info'),
        (e) => ({
            jobRole : e.querySelector('h3').innerText,
            companyDetails : e.querySelector('h4').innerText,
            location : e.querySelector('.base-search-card__metadata .job-search-card__location').innerText,

        })
    ));

    console.log(jobDetails);

    

    
    console.log('Finished fetching job details');

    // await browser.close();
};

run();