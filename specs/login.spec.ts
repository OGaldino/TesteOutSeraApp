// specs/login.spec.ts
import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';
// import { assert } from 'chai'; // <-- REMOVIDO: Não é utilizado neste arquivo

describe('Tarefa 1: Cenário de Login e Navegação no "TheApp"', () => {

    beforeEach(async () => {
        // Assegura que o aplicativo está aberto e na tela de login antes de cada teste
        await LoginPage.openApp(); 
        await LoginPage.isLoginScreenDisplayed(); 
    });

    it('deve realizar o login com sucesso e navegar para a tela de formulários', async () => {
        console.log('Iniciando teste de login com sucesso...');
        // Credenciais padrão do "TheApp"
        await LoginPage.login('webdriverio', 'Test@123'); 
        
        // Validação da mensagem de sucesso na tela de login
        await expect(LoginPage.loginSuccessMessage).toBeExisting();
        await expect(LoginPage.loginSuccessMessage).toHaveTextContaining('You are logged in!');
        console.log('Login realizado e mensagem de sucesso verificada.');

        // Navega para a tela de formulários após o login
        await HomePage.navigateToForms();
        // Validação: Após clicar em "Forms", o campo de input na tela de forms deve existir
        await expect($('~text-input')).toBeExisting(); 
        console.log('Navegação para tela de formulários e validação de elemento realizada.');
    });

    it('não deve realizar o login com credenciais inválidas', async () => {
        console.log('Iniciando teste de login inválido...');
        await LoginPage.login('invalidUser', 'wrongPassword');
        
        // Validação: Deve exibir uma mensagem de erro
        await expect(LoginPage.errorMessage).toBeExisting();
        await expect(LoginPage.errorMessage).toHaveTextContaining('Invalid Login Credentials');
        console.log('Mensagem de erro de credenciais inválidas verificada com sucesso.');
    });

    afterEach(async () => {
        // Reiniciar o aplicativo para o próximo teste para garantir um estado limpo
        await driver.reloadSession(); 
    });
});

function afterEach(arg0: () => Promise<void>) {
    throw new Error('Function not implemented.');
}
function expect(loginSuccessMessage: any) {
    throw new Error('Function not implemented.');
}

