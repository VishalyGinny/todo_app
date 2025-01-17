// corsMiddleware.ts
import { NextResponse } from 'next/server';

export function middleware() {
    const res = NextResponse.next();

    // add the CORS headers to the response
    res.headers.append('Access-Control-Allow-Credentials', 'true');
    res.headers.append('Access-Control-Allow-Origin', '*'); // replace '*' with your specific origin if needed
    res.headers.append('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.headers.append(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    return res;
}

export const config = {
    matcher: '/api/:path*',
};
