const HomeDepot = require("../pageobjects/homeDepot.page.js")

describe('Get product variables', () => {
    it('should get the prices of a searched object', async () => {
        await HomeDepot.open();
        await HomeDepot.search("nails");
        //await browser.pause(5000);
        //await expect(HomeDepot.keywordHeader).toHaveTextContaining("Nails");
        let firstLink = await HomeDepot.productLinks[0];
        console.log("URL Link - href Type: ", firstLink);
    });
});