// pageobjects/login.page.ts
import BasePage from './base.page';

class LoginPage extends BasePage {
    // Locators para "TheApp" (Accessibility IDs)
    public get usernameInput() { return $('~text-input-username'); }
    public get passwordInput() { return $('~text-input-password'); }
    public get loginButton() { return $('~Login'); }
    public get loginSuccessMessage() { return $('~Login success'); } // Mensagem de sucesso após login bem-sucedido
    public get errorMessage() { return $('~standard-error-message'); } // Mensagem de erro

    public async login(username: string, password: string): Promise<void> {
        await (await this.usernameInput).setValue(username);
        await (await this.passwordInput).setValue(password);
        await (await this.loginButton).click();
    }

    public async isLoginSuccessMessageDisplayed(): Promise<boolean> {
        return (await this.loginSuccessMessage).isDisplayed();
    }

    public async isErrorMessageDisplayed(): Promise<boolean> {
        return (await this.errorMessage).isDisplayed();
    }

    public async getErrorMessageText(): Promise<string> {
        return (await this.errorMessage).getText();
    }

    public async isLoginScreenDisplayed(): Promise<boolean> {
        return (await this.usernameInput).isDisplayed();
    }
}

export default new LoginPage();