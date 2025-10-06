// pages/login.page.ts
import BasePage from './base.page';

class LoginPage extends BasePage {
    // Locators (usando Accessibility ID para Android/iOS, que são mais robustos)
    public get usernameInput() {
        return $('~username_field'); // Exemplo de Accessibility ID
    }

    public get passwordInput() {
        return $('~password_field'); // Exemplo de Accessibility ID
    }

    public get loginButton() {
        return $('~login_button'); // Exemplo de Accessibility ID
    }

    public get errorMessage() {
        // Pode ser um Accessibility ID, XPath, ou outro se a mensagem for um elemento acessível
        return $('//*[@text="Invalid username or password."]');
    }

    /**
     * Realiza a ação de login no aplicativo.
     * @param username O nome de usuário.
     * @param password A senha.
     */
    public async login(username: string, password: string) {
        await this.waitForElementAndSetValue(this.usernameInput, username);
        await this.waitForElementAndSetValue(this.passwordInput, password);
        await this.waitForElementAndClick(this.loginButton);
    }

    /**
     * Obtém o texto da mensagem de erro.
     * @returns O texto da mensagem de erro.
     */
    public async getErrorMessageText(): Promise<string> {
        await this.errorMessage.waitForDisplayed({ timeout: 5000 });
        return await this.errorMessage.getText();
    }
}

export default new LoginPage();