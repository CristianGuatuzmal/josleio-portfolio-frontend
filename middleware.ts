import { NextResponse, NextRequest } from 'next/server'
export async function middleware(request: NextRequest, _ev: any) {
    const { pathname } = request.nextUrl;
    if (pathname == '/') {
        return NextResponse.redirect(new URL('/portfolio', request.url))
    }
    return NextResponse.next()
}