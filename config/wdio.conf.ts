// config/wdio.conf.ts
import type { Options, Capabilities } from '@wdio/types';
import * as path from 'path';
import '@wdio/globals'; // Continua sendo importante para 'browser', 'driver' e outros globals

// CORREÇÃO: Importar Suite, Test, TestResult do '@wdio/mocha-framework'
// onde eles são realmente definidos para o contexto do Mocha.
import { Suite, Test, TestResult } from '@wdio/mocha-framework';

// Atribuímos o objeto de configuração DIRETAMENTE a exports.config.
exports.config = {
    runner: 'local',
    specs: [
        './specs/**/*.ts'
    ],
    exclude: [],
    capabilities: [
        {
            'appium:platformName': 'Android',
            'appium:platformVersion': '11', // **AJUSTE** para a versão do seu emulador/dispositivo
            'appium:deviceName': 'Pixel_5_API_30', // **AJUSTE** para o nome do seu emulador/dispositivo
            'appium:automationName': 'UiAutomator2',
            'appium:app': path.join(process.cwd(), './assets/Android-NativeDemoApp-0.4.0.apk'),
            'appium:appPackage': 'com.wdiodemoapp',
            'appium:appActivity': 'com.wdiodemoapp.MainActivity',
            'appium:noReset': false,
            'appium:newCommandTimeout': 240,
            'appium:autoGrantPermissions': true,
            'appium:orientation': 'PORTRAIT',
        } as Capabilities.AppiumCapabilities
    ] as Options.WebdriverIO['capabilities'],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha', // <--- Importante: Framework Mocha sendo usado
    reporters: ['spec', ['allure', {
        outputDir: 'reports/allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    onPrepare: function (config: Options.WebdriverIO, capabilities: Options.WebdriverIO['capabilities']) { },
    // Usando 'Suite' importado de '@wdio/mocha-framework'
    beforeSuite: async function (suite: Suite) { },
    // Usando 'Test' importado de '@wdio/mocha-framework'
    beforeTest: async function (test: Test, context: any) {
        await browser.pause(1000);
    },
    // Usando 'Test' e 'TestResult' importados de '@wdio/mocha-framework'
    afterTest: async function (test: Test, context: any, result: TestResult) {
        if (result.error) {
            await browser.saveScreenshot(`./reports/screenshots/${test.title.replace(/\s/g, '_')}_${Date.now()}.png`);
        }
    },
    onComplete: function(exitCode: number, config: Options.WebdriverIO, capabilities: Options.WebdriverIO['capabilities'], results: any) {
        try {
            const allure = require('allure-commandline');
            const report = allure(['generate', 'reports/allure-results', '--clean', '-o', 'reports/allure-report']);
            console.log('Allure report generated. Run `npm run allure:open` to view.');
        } catch (e) {
            console.error('Failed to generate Allure report:', e);
        }
    }
};