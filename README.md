# MyAwesomeApp Mobile Automation - Teste de Avaliação de Candidatos

Este projeto contém um framework de automação de testes mobile utilizando Appium, WebdriverIO e TypeScript. Ele foi desenvolvido para avaliar a experiência do candidato com automação de testes em aplicativos móveis.

## 🎯 Objetivo

Avaliar a experiência do candidato na automação de testes para aplicativos móveis utilizando a ferramenta Appium, cobrindo desde a configuração do ambiente até a geração de relatórios.

## 🚀 Aplicativo de Exemplo

Os testes neste projeto são direcionados ao aplicativo demo oficial do WebdriverIO, conhecido como **"TheApp"**. Ele fornece funcionalidades de login e formulário, ideais para os cenários propostos.

*   **Download do APK:** Você pode baixar a versão Android do "TheApp" aqui: [Android-NativeDemoApp-0.4.0.apk](https://github.com/webdriverio/appium-boilerplate/raw/main/apps/android/Android-NativeDemoApp-0.4.0.apk)
*   **Coloque o APK na pasta `assets/`** deste projeto.

## 📦 Requisitos para Configuração

Para configurar e executar este projeto, você precisará ter o seguinte instalado em sua máquina:

*   **Node.js** (versão 16.x ou superior) e **npm** (ou yarn)
*   **Java Development Kit (JDK)** (versão 8 ou superior)
    *   Certifique-se de que a variável de ambiente `JAVA_HOME` esteja configurada e apontando para o diretório de instalação do JDK.
*   **Android SDK**
    *   Certifique-se de que a variável de ambiente `ANDROID_HOME` esteja configurada e apontando para o diretório do SDK.
    *   Instale as "Platform-Tools" e "Build-Tools" necessárias via Android SDK Manager.
*   **Appium Server:**
    *   Instale-o globalmente via npm: `npm install -g appium`
*   **Android Studio:**
    *   Utilize o Android Studio para criar e gerenciar um **Emulador Android (AVD)**. Inicie o emulador antes de executar os testes.
    *   Alternativamente, você pode usar um **dispositivo Android físico** com depuração USB ativada e conectado ao seu computador.

## ⚙️ Configuração do Projeto

1.  **Clone o repositório** (ou descompacte o arquivo).
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd my-awesome-app-automation
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Coloque o APK do "TheApp" na pasta `assets/`:**
    Certifique-se de que o arquivo `Android-NativeDemoApp-0.4.0.apk` esteja na pasta `assets/`.
5.  **Verifique as capacidades no `config/wdio.conf.ts`:**
    Ajuste `appium:platformVersion` e `appium:deviceName` para corresponderem ao seu emulador ou dispositivo.
    *   Para o `deviceName`, você pode verificar o nome do seu emulador no AVD Manager do Android Studio ou usar `adb devices` para dispositivos físicos.

## ▶️ Como Rodar os Testes

1.  **Inicie o Appium Server:**
    Abra um terminal **separado** e execute:
    ```bash
    appium
    ```
    Mantenha este terminal aberto enquanto os testes estiverem sendo executados.

2.  **Inicie o Emulador ou Conecte o Dispositivo:**
    *   Inicie seu Emulador Android via Android Studio.
    *   Ou conecte seu dispositivo Android físico com depuração USB ativada.
    *   Você pode verificar se está reconhecido com `adb devices`.

3.  **Execute os testes:**
    No terminal do projeto, execute:
    ```bash
    npm run test
    ```
    Isso iniciará o WebdriverIO, que se conectará ao Appium Server, instalará o APK no seu emulador/dispositivo e executará os testes.

## 📊 Visualizando os Relatórios Allure

Após a execução dos testes, você pode gerar e visualizar o relatório HTML interativo:

1.  **Gerar o relatório:**
    ```bash
    npm run allure:report
    ```
2.  **Abrir o relatório no navegador:**
    ```bash
    npm run allure:open
    ```
    O relatório será aberto automaticamente no seu navegador.

## 📝 Tarefas do Teste de Avaliação:

*   **`specs/login.spec.ts` (Tarefa 1 - Login e Navegação):**
    *   Automatiza o login no "TheApp" e verifica uma mensagem de sucesso.
    *   Navega para a tela de Formulários e valida a presença de um elemento.
    *   Inclui um teste para login com credenciais inválidas.
*   **`specs/form.spec.ts` (Tarefa 2 - Preenchimento de Formulário e Interações):**
    *   Preenche o campo de texto do formulário.
    *   Seleciona uma opção no dropdown.
    *   Alterna o switch de "OFF" para "ON".
    *   Clica no botão "Active" e interage com o alerta que aparece.
    *   O relatório Allure deve ser gerado.

## ☁️ Integração com BrowserStack (Informações Adicionais)

Para executar os testes em nuvem (ex: BrowserStack), você precisaria de uma conta e credenciais. As capacidades no `wdio.conf.ts` teriam que ser ajustadas para usar os serviços de nuvem, que geralmente envolvem:

1.  Comentar as capacidades locais e adicionar um bloco `'bstack:options'` (ou similar para outras plataformas).
2.  Fazer o upload do APK para o serviço de nuvem e referenciá-lo com um `bs://<app-id>`.
3.  Adicionar o serviço `browserstack` (ou equivalente) no array `services`.
    *   Exemplo de serviço BrowserStack: `services: [['browserstack', { browserstackLocal: true }]]`

**É crucial não colocar credenciais de nuvem diretamente no código fonte.** Utilize variáveis de ambiente para segurança.

---

Este projeto agora está completo e estruturado para você e para o candidato. Seguindo essas instruções, os testes devem rodar no emulador/dispositivo Android usando o "TheApp". Boa sorte!