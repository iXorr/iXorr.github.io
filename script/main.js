const switchBtns = document.querySelectorAll('.home-menu button');
const loginBtn = document.querySelector('.home-menu__login');
const registerBtn = document.querySelector('.home-menu__register');

const inputMenu = document.querySelector('.input-menu');
const inputMenuReg = document.querySelector('.input-menu-register');
const userMenu = document.querySelector('.user-menu');

const passwordField = document.querySelector('.input-menu__password-field-wrapper input');
const passwordVisibilityIcon = document.querySelector('.input-menu__visibility-icon');

const forgotPassword = document.querySelector('.input-menu__forgot-password-link');

const userName = document.getElementById('username');
const userNameReg = document.getElementById('usernameReg');

switchBtns.forEach((element) => element.addEventListener('click', () => {
    inputMenu.classList.toggle('input-menu-login-deactive');
    inputMenuReg.classList.toggle('input-menu-register-active');
    userMenu.classList.toggle('user-menu-reg');

    loginBtn.classList.toggle('home-menu__login-deactive');
    registerBtn.classList.toggle('home-menu__register-active');
}));

passwordVisibilityIcon.addEventListener('click', () => {
    if (passwordField.type == 'password') {
        passwordField.type = 'text';
        passwordVisibilityIcon.src = 'pictures/visibility-icon.png';
    }

    else {
        passwordField.type = 'password';
        passwordVisibilityIcon.src = 'pictures/invisibility-icon.svg';
    }
});

forgotPassword.addEventListener('click', () => {
    alert('Вы забыли пароль? - напишите любой: должно сработать');
});

// Прерывание обновления страницы

function handleForm(event) {
    event.preventDefault();
}

function handleLoginForm(event) {
    handleForm(event);
    alert('Приветствуем, ' + userName.value + '! - Как только вы зарегистрировались на несуществующем сайте?');
}

function handleRegForm(event) {
    handleForm(event);
    alert('Приветствуем, ' + userNameReg.value + '! - Не хочется расстраивать вас; но зря вы вводили данные: сайт-то ненастоящий');
}

inputMenu.addEventListener('submit', handleLoginForm);
inputMenuReg.addEventListener('submit', handleRegForm);