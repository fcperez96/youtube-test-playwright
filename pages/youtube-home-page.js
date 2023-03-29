exports.YoutubeHomePage = class YoutubeHomePage {
    /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://www.youtube.com/')
    }

    async searchVideo(videoName) {
        const searchInput = this.page.locator('#search-input');
        await searchInput.click();
        await searchInput.type(videoName);
        await this.page.keyboard.press('Enter');
    }

    async enterToFirstVideo() {
        await this.page.locator('(//div[@id="contents"]//ytd-video-renderer)[1]//ytd-thumbnail//a')
            .click();
    }

}