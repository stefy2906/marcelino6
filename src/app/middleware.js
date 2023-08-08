'use serve'

import { validateToken } from "./functions/jsonwebtoken";

export const middleware = (request) => {
    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/',request.url);

    const isTokenValidate = validateToken(token);
    if(!isTokenValidate || !token){
        if(request.nextUrl.pathname==='/pages/dashboard'){
            return NextResponse.redirect(urlLogin);
        }
    }
NextResponse.next();
};
export const config = {
    matcher: ['/','/´pages/dashboard']
};