***Settings***
Library        hello.py

***Test Cases***
Deve retornar mensagem de boas vindas

        ${resultado}=      Hello Robot    OzeasOK
        Should Be Equal    ${resultado}  Ola, OzeasOK.  