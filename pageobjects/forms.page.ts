// pageobjects/forms.page.ts
import BasePage from './base.page';

class FormsPage extends BasePage {
    // Locators para a tela de Forms do "TheApp"
    public get inputField() { return $('~text-input'); }
    public get inputResultText() { return $('~input-text-result'); }
    public get dropdown() { return $('~Dropdown'); }
    public get dropdownOption1() { return $('android=new UiSelector().text("webdriver.io is awesome")'); } // Exemplo para Android
    public get switchElement() { return $('~switch'); }
    public get switchText() { return $('~switch-text'); }
    public get activeButton() { return $('~button-Active'); }
    public get activeButtonText() { return $('~button-Active'); } // O mesmo elemento tem o texto "Active"

    public async fillInputField(text: string): Promise<void> {
        await (await this.inputField).setValue(text);
    }

    public async getInputFieldResult(): Promise<string> {
        return (await this.inputResultText).getText();
    }

    public async selectDropdownOption(): Promise<void> {
        await (await this.dropdown).click();
        // A interação com dropdowns pode variar. Para o TheApp em Android,
        // clica-se no dropdown, e então um AlertDialog com opções aparece.
        // Clicamos no texto da opção desejada.
        await (await this.dropdownOption1).click();
    }

    public async toggleSwitch(): Promise<void> {
        await (await this.switchElement).click();
    }

    public async getSwitchStatus(): Promise<string> {
        return (await this.switchText).getText();
    }

    public async clickActiveButton(): Promise<void> {
        await (await this.activeButton).click();
    }

    public async getActiveButtonText(): Promise<string> {
        return (await this.activeButtonText).getText();
    }

    public async isFormsScreenDisplayed(): Promise<boolean> {
        return (await this.inputField).isDisplayed();
    }
}

export default new FormsPage();