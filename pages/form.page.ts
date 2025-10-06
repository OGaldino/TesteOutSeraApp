// pages/form.page.ts
import BasePage from './base.page';

class FormPage extends BasePage {
    public get nameField() {
        return $('~name_input');
    }

    public get emailField() {
        return $('~email_input');
    }

    public get messageField() {
        return $('~message_input');
    }

    public get submitButton() {
        return $('~submit_button');
    }

    public get confirmationMessage() {
        return $('~form_confirmation_message');
    }

    public get nameError() {
        return $('~name_error_message');
    }

    public get emailError() {
        return $('~email_error_message');
    }

    /**
     * Preenche o formulário com os dados fornecidos.
     * @param name Nome do usuário.
     * @param email Email do usuário.
     * @param message Mensagem.
     */
    public async fillForm(name: string, email: string, message: string) {
        await this.waitForElementAndSetValue(this.nameField, name);
        await this.waitForElementAndSetValue(this.emailField, email);
        await this.waitForElementAndSetValue(this.messageField, message);
        await this.waitForElementAndClick(this.submitButton);
    }

    /**
     * Obtém o texto da mensagem de confirmação de envio do formulário.
     * @returns O texto da mensagem de confirmação.
     */
    public async getConfirmationMessageText(): Promise<string> {
        await this.confirmationMessage.waitForDisplayed({ timeout: 10000 });
        return await this.confirmationMessage.getText();
    }

    /**
     * Verifica se uma mensagem de erro de campo está visível.
     * @param fieldLocator O locator do campo de erro.
     * @returns True se a mensagem de erro estiver visível, caso contrário, False.
     */
    public async isFieldErrorDisplayed(fieldLocator: WebdriverIO.Element): Promise<boolean> {
        return await fieldLocator.isDisplayed();
    }
}

export default new FormPage();