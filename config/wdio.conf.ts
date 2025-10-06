// config/wdio.conf.ts
export const config: WebdriverIO.Config = {
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    maxInstances: 1, // <-- AGORA ESTÁ AQUI, NO NÍVEL GLOBAL!

    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './test/specs/**/*.ts' // Recomendo usar este para pegar todos os seus arquivos .ts
                               // Se você quiser apenas um, use './test/specs/login.spec.ts'
    ],
    exclude: [],

    // ============
    // Capabilities
    // ============
    // As capabilities definem o ambiente em que seus testes serão executados.
    // Agora, elas não incluem 'maxInstances'.
    capabilities: [{
        // NOTA: 'maxInstances' FOI REMOVIDO DAQUI
        
        // Informações da plataforma
        platformName: 'Android', // Ou 'iOS' para testes em iOS
        'appium:deviceName': 'Pixel_6_API_33', // Nome do seu emulador/dispositivo (ex: adb devices)
        'appium:platformVersion': '13', // Versão do Android (ou iOS)
        'appium:app': './path/to/your/app.apk', // Caminho ABSOLUTO para o arquivo .apk/.ipa
        // Ex: '/Users/seu_usuario/Projetos/mobile-appium-tests/app/sua_app.apk'
        'appium:automationName': 'UiAutomator2', // Para Android. Use 'XCUITest' para iOS.
        'appium:autoGrantPermissions': true, // Concede automaticamente as permissões do app
        'appium:newCommandTimeout': 240, // Tempo limite para novos comandos Appium

        // Para iOS, as capabilities seriam diferentes, exemplo:
        // platformName: 'iOS',
        // 'appium:deviceName': 'iPhone 14 Pro',
        // 'appium:platformVersion': '16.4',
        // 'appium:app': './path/to/your/app.ipa',
        // 'appium:automationName': 'XCUITest',
        // 'appium:udid': 'YOUR_DEVICE_UDID', // Opcional para dispositivo físico
    }],

    // ===================
    // Framework
    // ===================
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000 // Aumenta o timeout para testes mobile, que podem ser mais lentos
    },

    // ===================
    // Reporters
    // ===================
    reporters: ['spec', ['allure', {
        outputDir: 'reports/allure-results', // Onde os resultados Allure serão salvos
        disableWebdriverStepsReporting: true,
        disableWebdriverHooksReporting: true,
    }]],

    // ===================
    // Services
    // ===================
    services: [['appium', {
        args: {
            // Opcional: especificar a porta onde o servidor Appium deve rodar
            // port: 4723,
            // Opcional: especificar o nível de log do Appium
            // loglevel: 'debug'
        },
        command: 'appium', // O comando para iniciar o servidor Appium
    }]],

    // ====================
    // Base URL
    // ====================
    baseUrl: 'http://localhost', // Não é tão relevante para testes mobile de app nativo.

    // ====================
    // Test Configurations
    // ====================
    logLevel: 'info', // Nível de verbosidade do log: trace | debug | info | warn | error | silent
    bail: 0, // Sai após N falhas. 0 significa que continuará até o fim.
    waitforTimeout: 10000, // Tempo limite para todos os comandos waitFor (ex: waitForDisplayed)
    connectionRetryTimeout: 120000, // Tempo limite para o cliente WebdriverIO esperar por um comando
    connectionRetryCount: 3, // Número de tentativas de conexão.

    // ====================
    // Hooks
    // ====================
    // Você pode adicionar hooks para personalizar o comportamento do seu teste.
    // Exemplo para usar o Allure report generator após todos os testes:
    // onComplete: function(exitCode, config, capabilities, results) {
    //     const report = require('allure-commandline');
    //     const allureReport = report(['generate', 'reports/allure-results', '--clean', '-o', 'reports/allure-report']);
    //     console.log('Allure report generated at reports/allure-report');
    // }
};