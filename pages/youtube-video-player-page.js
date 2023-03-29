const { expect } = require('@playwright/test');

exports.YoutubeVideoPlayerPage = class YoutubeVideoPlayerPage {
    /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page) {
        this.page = page;
    }

    async waitForPlayer() {
        await this.page.waitForSelector('video');
    }

    async playVideoInMiniplayer() {
        await this.page.locator('//button[@data-tooltip-target-id= "ytp-miniplayer-button"]')
            .click();
    }

    async getMiniplayerSize() {
        return await this.page.locator('//ytd-player[@id = "ytd-player"]//div[@id = "container"]')
            .boundingBox();
    }

    async verifyMiniplayerSize(miniplayerSize) {
        expect(miniplayerSize.width).toBe(400);
        expect(miniplayerSize.height).toBe(225);
    }

}