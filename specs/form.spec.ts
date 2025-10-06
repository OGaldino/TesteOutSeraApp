// specs/form.spec.ts
import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';
import FormsPage from '../pageobjects/forms.page';
// import { assert } from 'chai'; // <-- REMOVIDO: Não é utilizado neste arquivo

describe('Tarefa 2: Cenário de Preenchimento de Formulário no "TheApp"', () => {

    beforeEach(async () => {
        // Assegura que o aplicativo está aberto e na tela de login
        await LoginPage.openApp();
        // Pré-condição: fazer login para acessar o formulário
        await LoginPage.login('webdriverio', 'Test@123');
        // Aguarda a mensagem de sucesso do login estar visível
        await expect(LoginPage.loginSuccessMessage).toBeExisting(); 
        
        // Navega para a tela de Formulários
        await HomePage.navigateToForms();
        // Garante que a tela do formulário está visível
        await FormsPage.isFormsScreenDisplayed();
        console.log('Pré-condição: Login e navegação para formulário concluídos.');
    });

    it('deve preencher o campo de texto, selecionar dropdown, alternar switch e clicar no botão Active', async () => {
        console.log('Iniciando teste de preenchimento e submissão de formulário...');
        const inputText = 'Meu texto de teste';

        // 1. Preencher campo de texto e validar
        await FormsPage.fillInputField(inputText);
        await expect(FormsPage.getInputFieldResult()).toHaveTextContaining(inputText);
        console.log(`Campo de texto preenchido e validado: "${inputText}"`);

        // 2. Selecionar opção do dropdown
        await FormsPage.selectDropdownOption();
        console.log('Opção do dropdown selecionada.');
        // Nota: A validação direta do texto selecionado no TheApp pode ser mais complexa
        // devido à forma como ele exibe o item selecionado após o dropdown ser fechado.
        // Assumimos que o clique na opção foi bem-sucedido.

        // 3. Alternar o switch e validar a mudança de estado
        const initialSwitchStatus = await FormsPage.getSwitchStatus();
        console.log(`Status inicial do Switch: ${initialSwitchStatus}`);
        await FormsPage.toggleSwitch();
        const finalSwitchStatus = await FormsPage.getSwitchStatus();
        await expect(finalSwitchStatus).not.toEqual(initialSwitchStatus); // Verifica se o status mudou
        console.log(`Switch alternado. Novo status: ${finalSwitchStatus}`);

        // 4. Clicar no botão "Active" e interagir com o alerta
        await FormsPage.clickActiveButton();
        
        // Aguarda o alerta aparecer e valida seu texto
        await driver.waitUntil(async () => await driver.getAlertText(), {
            timeout: 5000,
            timeoutMsg: 'Alerta não apareceu após clicar no botão Active'
        });
        const alertText = await driver.getAlertText();
        console.log(`Alerta após clicar em Active: "${alertText}"`);
        await expect(alertText).to.include('This button is active');
        await driver.acceptAlert(); // Aceita o alerta para fechar
        
        console.log('Formulário preenchido e interações validadas.');
    });

    afterEach(async () => {
        // Reinicia o aplicativo para garantir um estado limpo para o próximo teste
        await driver.reset(); 
    });
});
// As definições de `afterEach` e `beforeEach` fora do `describe` foram removidas.
// Use os hooks globais fornecidos pelo framework de teste (Mocha).