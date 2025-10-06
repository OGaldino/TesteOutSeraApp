// pageobjects/home.page.ts
import BasePage from './base.page';

class HomePage extends BasePage {
    // Locators para "TheApp"
    // Após o login, a tela de login permanece, mas com uma mensagem de sucesso.
    // Para navegar para o formulário, precisamos do botão "Forms".
    public get formsButton() { return $('~Forms'); }
    public get webviewButton() { return $('~Webview'); } // Para exemplo de navegação adicional

    /**
     * Navega para a tela de Formulários.
     */
    public async navigateToForms(): Promise<void> {
        await (await this.formsButton).click();
    }

    /**
     * Navega para a tela de Webview.
     */
    public async navigateToWebview(): Promise<void> {
        await (await this.webviewButton).click();
    }
}

export default new HomePage();