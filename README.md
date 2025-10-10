# Teste Outsera App
Projeto de Automação Mobile (Android)

Este repositório contém testes End-to-End (E2E) para aplicativos Android, desenvolvidos utilizando o Robot Framework e a biblioteca AppiumLibrary. O objetivo é garantir a estabilidade e a qualidade funcional do app através de scripts de fácil manutenção e leitura.

## 🚀 Autor

**Ozéas Galdino**

## 📋 Pré-requisitos (Essencial)
Para executar os testes, você precisará de três componentes principais:

Componente

Ferramenta

Onde obter

Ambiente de Teste

Python 3.8+ e Robot Framework

requirements.txt

Servidor de Automação

Node.js e Appium Server

npm (npm install -g appium)

Dispositivo Mobile

Android Studio e ADB

Download Android Studio

## 💡 Nota: O Appium Server (Node.js) atua como ponte de comunicação entre os scripts Robot (Python) e o dispositivo Android.

## ⚙️ Configuração Rápida (TL;DR)
Siga estes passos para configurar e rodar os testes em um emulador ou dispositivo físico com Debug USB ativado.

1. Clonagem e Dependências Python
Clone o projeto e instale as bibliotecas necessárias para o Robot Framework.

git clone [https://github.com/OGaldino/TesteOutSeraApp.git](https://github.com/OGaldino/TesteOutSeraApp.git)
cd twpMobile---Appium-Robot
pip install -r requirements.txt

2. Instalação do Appium Server
Instale o Node.js (se ainda não tiver) e o Appium globalmente.

# Instalar o Appium globalmente:
npm install -g appium

3. Configuração do Ambiente Android
Certifique-se de que o Android Studio está instalado e o ADB (Android Debug Bridge) está configurado no seu PATH.

# Verifique se o ADB funciona e lista seu dispositivo/emulador
adb devices 

🚀 Execução dos Testes (Recomendado)
O projeto inclui um script batch para iniciar o servidor Appium e um comando robot padrão.

## Passo 1: Iniciar o Appium
Mantenha o servidor Appium rodando em um terminal separado. O script start_appium_with_android.bat automatiza a inicialização com as configurações básicas.

start_appium_with_android.bat

## Passo 2: Rodar os Testes
Em um novo terminal, execute o Robot Framework.

Comando

Descrição

robot -d logs tests/

Executa TODOS os testes na pasta tests/.

robot -d logs tests/buttons.robot

Executa um teste específico (ex: buttons.robot).

robot -d logs -i long tests/

Executa testes usando Tags (ex: testes marcados com long).

## 📊 Relatórios e Logs
Após a execução, todos os resultados são gerados automaticamente na pasta logs/.

Relatório Principal: Abra o arquivo logs/report.html no seu navegador.

Log Detalhado: Para debug, consulte logs/log.html.

Screenshots: Capturas de tela de falha salvas como logs/appium-screenshot-*.png.

🛠️ Estrutura do Projeto
Pasta/Arquivo

Descrição

tests/

Contém todos os arquivos de casos de teste (.robot).

resource/base.robot

Configuração central do Appium (Capabilities). Arquivo CRÍTICO.

resource/helpers.robot

Keywords reusáveis para simplificar os testes.

app/twp.apk

O aplicativo Android de teste.

run_tests.py

Scripts Python alternativos para execução de testes.

start_appium_with_android.bat

Script utilitário para iniciar o servidor Appium.

## ⚠️ Troubleshooting Comum
Problema

Causa Provável

Solução Rápida

"adb não é reconhecido"

O SDK Tools não está no PATH.

Instale o Android Studio e adicione a pasta platform-tools ao PATH do sistema.

"ANDROID_HOME not found"

Variáveis de ambiente ausentes.

Defina as variáveis ANDROID_HOME e ANDROID_SDK_ROOT apontando para o diretório do seu SDK Android.

"Connection refused"

Servidor Appium não está rodando.

Execute start_appium_with_android.bat e mantenha-o aberto. Verifique se está na porta 4723.

"No devices found"

Dispositivo não conectado/debug USB inativo.

Conecte seu dispositivo ou inicie um emulador. Verifique com o comando adb devices.

## ✅ Status: Testado e Funcional
Testado em ambiente Windows 11 com Python 3.x, Node/Appium e Android SDK.