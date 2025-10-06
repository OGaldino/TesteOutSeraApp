// pageobjects/base.page.ts
import { ChainablePromiseElement } from 'webdriverio';
import '@wdio/globals'; // Garante que 'driver' é reconhecido aqui também

export default class BasePage {
    public async openApp(): Promise<void> {
        // O Appium inicia o app automaticamente com as capabilities
        await driver.waitUntil(async () => {
            // Verifica se as strings do aplicativo foram carregadas, indicando que o app está pronto.
            return Object.keys(await driver.getStrings()).length > 0;
        }, { timeout: 15000, timeoutMsg: 'App did not load within expected time' });
        console.log('App is ready.');
    }

    public async scrollToElement(accessibilityId: string, direction: 'down' | 'up' | 'left' | 'right' = 'down'): Promise<void> {
        if (driver.isAndroid) {
            // Para Android, usar UiScrollable para rolar até o elemento
            const selector = `new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().description("${accessibilityId}"))`;
            await $(`android=${selector}`);
        } else if (driver.isIOS) {
            // Para iOS, usar mobile:scroll
            await driver.execute('mobile: scroll', { element: (await $(`~${accessibilityId}`)).elementId, direction: direction });
        }
    }

    public async waitForElement(selector: string, timeout: number = 10000): Promise<ChainablePromiseElement<WebdriverIO.Element>> {
        const element = await $(selector);
        await element.waitForExist({ timeout: timeout, timeoutMsg: `Element ${selector} not found after ${timeout}ms` });
        return element;
    }
}