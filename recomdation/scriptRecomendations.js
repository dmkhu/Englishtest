//кнопка меню телефона
function navPhone() {
    let menu = document.querySelector(".phone-menu");
    let menuStyle = window.getComputedStyle(menu);
    let menuDisplay = menuStyle.getPropertyValue("display");
    if(menuDisplay === "block") {
        document.querySelector('.phone-menu').style= 'display: none';
        document.querySelector('.context').style= 'display: block';
    }
    else {
        document.querySelector('.context').style= 'display: none';
        document.querySelector('.phone-menu').style= 'display: block';
    }
}

//кнопка пройти еще раз
function pushAgain() {
    location.reload();
}
