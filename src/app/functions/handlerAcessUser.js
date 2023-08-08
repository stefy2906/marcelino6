import Cookies from "js-cookie";

const handlerAcessUser = () => {
    const responseIsUserAtuh={
        name: 'Stefany',
        email:'stefany@gmail.com',
        token: 'token'
    };
    const isTokenValidate =validateToken(responseIsUserAtuh.token);
    if(isTokenValidate){
        Cookies.set('token',responseIsUserAtuh.token);
    }
}

export  { handlerAcessUser };