describe('Покемоны', function () {

    it('Покупка аватара', function () {
         cy.visit('https://pokemonbattle.ru/login'); // Звходим на сайт покемонов
         cy.get('.login__content').should('be.visible'); // Форма авторизации видна пользователю

         cy.get(':nth-child(1) > .auth__input').type('user_login'); // Вводи верный логин
         cy.get('#password').type('user_password'); // Вводим верный пароль
         cy.get('.auth__button').click(); // Нажимаем на кнопку Войти

         cy.wait(500)
         cy.get('.header__btns > :nth-child(4)').click();  // Нажимаем на навигацию Магазин
         cy.get('.available > button').first().click();  // кликаем по кнопке Купить у первого доступного аватара

         cy.get('.credit').type('4620869113632996');   // Вводим номер карты
         cy.get('.k_input_ccv').type('125');  // Вводим CVV карты
         cy.get('.k_input_date').type('1225');  // Вводим срок действия карты
         cy.get('.k_input_name').type('NAME');  // Вводим имя владельца действия карты
         cy.get('.pay-btn').click();   // Нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456'); // Вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();  // Нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible'); // Проверяем наличие и видимость сообщения о успешной покупке
     });
 }) 