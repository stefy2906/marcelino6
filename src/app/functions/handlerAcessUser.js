import Cookies from "js-cookie";

const handlerAcessUser = () => {
     Cookies.set('token','Este é um token!');
}

export {handlerAcessUser}