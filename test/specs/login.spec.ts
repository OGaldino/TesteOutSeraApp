// test/specs/login.spec.ts
import LoginPage from '../../pages/login.page';
import DashboardPage from '../../pages/dashboard.page';

describe('Funcionalidade de Login e Navegação', () => {
    // Hooks: beforeEach executa antes de cada teste, afterEach executa depois de cada teste
    beforeEach(async () => {
        // Redefine o estado do aplicativo antes de cada teste para garantir isolamento
        // ou inicia o app caso ele não esteja rodando.
        // `driver.launchApp()` ou `driver.reset()` dependem do seu caso de uso.
        // Para a maioria dos cenários, reset() é uma boa prática para limpar o estado anterior.
        await driver.reset();
        // Pode ser necessário adicionar algumas esperas ou navegações para
        // chegar à tela de login, dependendo do seu app.
    });

    afterEach(async () => {
        // Fecha o aplicativo após cada teste ou reseta
        await driver.closeApp();
    });

    it('deve fazer login com sucesso e exibir mensagem de boas-vindas', async () => {
        console.log('Iniciando teste: login com sucesso...');
        await LoginPage.login('usuario_teste', 'senha_secreta'); // Substitua pelas credenciais do seu app

        // Validação 1: Verificar se a mensagem de boas-vindas está visível
        await expect(DashboardPage.welcomeMessage).toBeDisplayed();
        // Validação 2: Verificar o texto da mensagem de boas-vindas
        await expect(DashboardPage.getWelcomeMessageText()).toHaveTextContaining('Bem-vindo');

        console.log('Login bem-sucedido. Navegando para configurações...');
        // Exemplo de navegação: clicar no botão de configurações
        await DashboardPage.clickSettingsButton();
        // Adicionar uma asserção para verificar se a tela de configurações foi aberta
        // Ex: await expect($('~settings_screen_title')).toBeDisplayed();
        console.log('Navegado para configurações. Voltando para dashboard...');
        await driver.back(); // Volta para a tela anterior
        await expect(DashboardPage.welcomeMessage).toBeDisplayed(); // Verifica se voltou para a dashboard
        console.log('Teste de login e navegação concluído com sucesso.');
    });

    it('deve exibir uma mensagem de erro com credenciais inválidas', async () => {
        console.log('Iniciando teste: login com credenciais inválidas...');
        await LoginPage.login('usuario_invalido', 'senha_errada');

        // Validação: Verificar se a mensagem de erro está visível e com o texto correto
        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(LoginPage.getErrorMessageText()).toHaveText('Invalid username or password.');
        console.log('Mensagem de erro de credenciais inválidas verificada.');
    });
});