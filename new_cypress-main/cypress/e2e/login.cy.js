describe('Авторизация', function () {

    it('Успешная авторизация', function () {
         cy.visit('https://login.qa.studio/'); // Переходим в нужный сайт
         cy.get('#form').should('be.visible'); // Проверка, что Форма авторизации видна пользователям

         cy.get('#mail').type('german@dolnikov.ru'); // Вводим верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Вводим верный пароль
         cy.get('#loginButton').click(); // Нажимаем на кнопку Войти
         
         cy.get('#message').should('be.visible'); // Проверяем, что элемент виден пользователю
         cy.get('#message').contains('Авторизация прошла успешно'); 
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // 
     })
     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // Переходим в нужный сайт
        cy.get('#form').should('be.visible'); // Проверка, что Форма авторизации видна пользователям

        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяем стиль надписи
        cy.get('#forgotEmailButton').click(); // Нажимаем на восстановление пароли
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Пишем нужную почту
        cy.get('#restoreEmailButton').click(); // Нажимаем на кнопку "отправить код"

        cy.get('#message').should('be.visible'); // Проверяем, что элемент виден пользователю
        cy.get('#message').contains('Успешно отправили пароль на e-mail'); // Проверяем правильность страницы результата
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // 
 })
    it('Верный логин и неверный пароль', function () {
       cy.visit('https://login.qa.studio/'); // Переходим в нужный сайт
       cy.get('#form').should('be.visible'); // Проверка, что Форма авторизации видна пользователям

       cy.get('#mail').type('german@dolnikov.ru'); // Вводим верный логин
       cy.get('#pass').type('iLoveqastudio0'); // Вводим неверный пароль
       cy.get('#loginButton').click(); // Нажимаем на кнопку Войти
    
       cy.get('#message').should('be.visible'); // Проверяем, что элемент виден пользователю
       cy.get('#message').contains('Такого логина или пароля нет'); 
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
})
     it('Неверный логин и верный пароль', function () {
       cy.visit('https://login.qa.studio/'); // Переходим в нужный сайт
       cy.get('#form').should('be.visible'); // Проверка, что Форма авторизации видна пользователям

       cy.get('#mail').type('german@dolnikoF.ru'); // Вводим неверный логин
       cy.get('#pass').type('iLoveqastudio1'); // Вводим верный пароль
       cy.get('#loginButton').click(); // Нажимаем на кнопку Войти
 
       cy.get('#message').should('be.visible'); // Проверяем, что элемент виден пользователю
       cy.get('#message').contains('Такого логина или пароля нет'); 
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
})
    it('Вводим логин без @', function () {
       cy.visit('https://login.qa.studio/'); // Переходим в нужный сайт
       cy.get('#form').should('be.visible'); // Проверка, что Форма авторизации видна пользователям

       cy.get('#mail').type('germandolnikov.ru'); // Вводим логин без @
       cy.get('#pass').type('iLoveqastudio1'); // Вводим верный пароль
       cy.get('#loginButton').click(); // Нажимаем на кнопку Войти

       cy.get('#message').should('be.visible'); // Проверяем, что элемент виден пользователю
       cy.get('#message').contains('Нужно исправить проблему валидации'); 
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
})
    it('Строчные буквы в логине', function () {
       cy.visit('https://login.qa.studio/'); // Переходим в нужный сайт
       cy.get('#form').should('be.visible'); // Проверка, что Форма авторизации видна пользователям

       cy.get('#mail').type('GerMan@Dolnikov.ru'); // Вводим логин со строчными буквами             
       cy.get('#pass').type('iLoveqastudio1'); // Вводим верный пароль
       cy.get('#loginButton').click(); // Нажимаем на кнопку Войти

       cy.get('#message').should('be.visible'); // Проверяем, что элемент виден пользователю
       cy.get('#message').contains('Такого логина или пароля нет'); 
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
})
})  