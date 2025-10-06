// pages/base.page.ts
export default class BasePage {
    protected async waitForElementAndClick(element: WebdriverIO.Element, timeout: number = 10000) {
        await element.waitForDisplayed({ timeout: timeout });
        await element.click();
    }

    protected async waitForElementAndSetValue(element: WebdriverIO.Element, value: string, timeout: number = 10000) {
        await element.waitForDisplayed({ timeout: timeout });
        await element.setValue(value);
    }
}