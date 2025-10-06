// test/specs/form.spec.ts
import LoginPage from '../../pages/login.page';
import DashboardPage from '../../pages/dashboard.page';
import FormPage from '../../pages/form.page';

describe('Funcionalidade de Preenchimento e Envio de Formulário', () => {
    beforeEach(async () => {
        await driver.reset();  await LoginPage.login('usuario_teste', 'senha_secreta'); // Substitua pelas credenciais
        await DashboardPage.clickFormLink(); // Navega para a tela do formulário
        console.log('Pré-condição: Logged in and navigated to form page.');
    });

    afterEach(async () => {
        await driver.closeApp();
    });

    it('deve preencher e enviar o formulário com sucesso', async () => {
        console.log('Iniciando teste: preenchimento de formulário com sucesso...');
        const nome = 'João da Silva';
        const email = 'joao.silva@exemplo.com';
        const mensagem = 'Esta é uma mensagem de teste para o formulário.';

        await FormPage.fillForm(nome, email, mensagem);
        await expect(FormPage.confirmationMessage).toBeDisplayed();
         await expect(FormPage.getConfirmationMessageText()).toHaveTextContaining('Formulário enviado com sucesso!');
        console.log('Formulário enviado e mensagem de confirmação verificada.');
    });

    it('deve exibir erros de validação para campos vazios', async () => {
        console.log('Iniciando teste: validação de campos vazios...');
        // Tenta enviar o formulário sem preencher nada
        await FormPage.submitButton.click();

        // Validações: Verificar se as mensagens de erro para cada campo estão visíveis
        await expect(FormPage.nameError).toBeDisplayed();
        await expect(FormPage.nameError).toHaveText('O campo nome é obrigatório.'); // Substitua pelo texto real de erro
        await expect(FormPage.emailError).toBeDisplayed();
        await expect(FormPage.emailError).toHaveText('O campo email é obrigatório.'); // Substitua pelo texto real de erro
        // Adicione validações para outros campos se houver
        console.log('Erros de validação de campos vazios verificados.');
    });
});