import Cookies from "js-cookie";

const handlerAcessUser = () => {
    const responseIsUserAtuh={
        name: 'Stefany',
        email:'stefany@gmail.com',
        token: 'token'
    };
    if(responseIsUserAtuh.token==="token"){
        Cookies.set('token',responseIsUserAtuh.token);
    }
}

export  { handlerAcessUser };