@echo off
echo ====================================
echo    TESTADOR DE REQUIREMENTS.TXT
echo ====================================
echo.

echo Testando requirements.txt...
echo.

REM Verificar se requirements.txt existe
if not exist requirements.txt (
    echo ❌ requirements.txt nao encontrado!
    pause
    exit /b 1
)

echo ✓ requirements.txt encontrado
echo.

echo Conteudo do requirements.txt:
echo --------------------------------
type requirements.txt
echo --------------------------------
echo.

echo Para testar a instalacao:
echo.
echo 1. Crie um novo ambiente virtual:
echo    python -m venv test-env
echo.
echo 2. Ative o ambiente:
echo    test-env\Scripts\activate
echo.
echo 3. Instale as dependencias:
echo    pip install -r requirements.txt
echo.
echo 4. Teste a instalacao:
echo    robot --version
echo    python -c "import AppiumLibrary; print('AppiumLibrary OK')"
echo.

echo Pressione qualquer tecla para continuar...
pause >nul