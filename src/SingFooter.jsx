import React from 'react';

import "./App.scss";
import SingUp from "./components/singUp/SingUp";




export default function() {
    return(
        <div className="main">
        <img
          className="main__Logo"
          src="src\assets\logo.png"
          alt="Logo"
        />
        <SingUp
          inputLog="Электронная почта или номер телефона"
          inputPass="Пароль"
          buttonLog="Войти"
          buttonSing="Создать аккаунт"
          remPass="Забыли пароль"
          check="Запомнить пароль"
        />
        <p className="variant">продолжить с помощью</p>
        <div className="socialSing">
          <a href="">
            <img src="src/assets/vk.png" 
            alt="" 
            />
          </a>
          <a href="">
            <img src="src/assets/sberID.png" 
            alt="" 
            />
          </a>
          <a href="">
            <img src="src/assets/Yandex.png"
            alt="SingUp using Yandex" 
            />
          </a>
        </div>
      </div>
    )
}
