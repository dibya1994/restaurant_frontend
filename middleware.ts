import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest)
{
    // const cookie=req.cookies.get("jwtoken");
    // console.log('cookie', cookie.value);

    // req.cookies.delete("jwtoken");

    // return NextResponse.next();
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        const jwttoken = localStorage.getItem('jwttoken');
        if(!jwttoken)
        {
            return NextResponse.redirect(new URL("/signin",req.url));
        }
    }

    
    
}

export const config={
    matcher:'/dashboard/:path*' //for single path
    // matcher:['/dashboard/:path*','/profile/:path*'] //for multiple path
}