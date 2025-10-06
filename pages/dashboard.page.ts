// pages/dashboard.page.ts
import BasePage from './base.page';

class DashboardPage extends BasePage {
    public get welcomeMessage() {
        return $('~welcome_message'); // Exemplo de Accessibility ID
    }

    public get settingsButton() {
        return $('~settings_button'); // Exemplo de Accessibility ID
    }

    public get formLink() {
        return $('~form_link'); // Exemplo de Accessibility ID para navegar ao formulário
    }

    /**
     * Obtém o texto da mensagem de boas-vindas na dashboard.
     * @returns O texto da mensagem de boas-vindas.
     */
    public async getWelcomeMessageText(): Promise<string> {
        await this.welcomeMessage.waitForDisplayed({ timeout: 10000 });
        return await this.welcomeMessage.getText();
    }

    /**
     * Clica no botão de configurações.
     */
    public async clickSettingsButton() {
        await this.waitForElementAndClick(this.settingsButton);
    }

    /**
     * Clica no link para a página de formulário.
     */
    public async clickFormLink() {
        await this.waitForElementAndClick(this.formLink);
    }
}

export default new DashboardPage();