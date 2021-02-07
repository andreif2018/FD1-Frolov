"use strict";
//for tablet and mobile burger menu
function sayHello() {
    let firstName = document.getElementById('name1').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('mes1').value;

    function validateForm() {
        if (firstName === "") {
            alert("Поле \"Имя\" должно быть заполнено");
            return false;
        }
        if (email === "") {
            alert("Поле \"Email\" должно быть заполнено");
            return false;
        }
        let re = /^[^\s()<>@,;:\/]+@\w[\w-]+\.[a-z]{2,}$/i;
        if (re.test(email) === false) {
            alert("Адрес электронной почты неверный");
            return false;
        }
        if (message === "") {
        alert("Поле \"Сообщение\" должно быть заполнено");
        return false;
        }
        return true;
    }

    function reply() {
        let replyFrame1 = document.getElementById("reply1");
        let replyFrame2 = document.getElementById("reply2");
        let replyFrame3 = document.getElementById("reply3");
        let text = "Уважаемый/ая, " + firstName + ". ";
        let text2 = "Мы свяжемся с Вами в ближайшее время ";
        let text3 = "по указанному адресу электронной почты: " + email;
        replyFrame1.innerHTML = text;
        replyFrame2.innerHTML = text2;
        replyFrame3.innerHTML = text3;
    }
    if (validateForm()) {
        reply();
        document.getElementById("myForm").reset();
    }

}

