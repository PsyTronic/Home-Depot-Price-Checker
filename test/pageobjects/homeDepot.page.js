const Page = require('./page');

class HomeDepot extends Page {

    get searchBox()
    {
        return $("#headerSearch");
    }
    get searchButton()
    {
        return $("#headerSearchButton");
    }

    get keywordHeader()
    {
        return $(".results-header__keyword");
    }
    get productLinks()
    {
        return $$("//*").getAttribute('a href=');
    }

    async search(searchTerm)
    {
        await this.searchBox.setValue(searchTerm);
        //await this.searchButton.click();
        browser.keys("\uE007");
        // await browser.pause(1000);
    }

    open (path) {
        return browser.url(`https://homedepot.com`)
    }

}
module.exports = new HomeDepot();