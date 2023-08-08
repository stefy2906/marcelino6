'use serve'
export const middleware = (request) => {
    const token = request.cookies.get('token');
    const urlLogin = new URL('/',request.url);
    if(!token){
        if(request.nextUrl.pathname==='/pages/dashboard'){
            return NextResponse.redirect(urlLogin);
        }
    }
NextResponse.next();
};
export const config = {
    matcher: ['/','/´pages/dashboard']
};