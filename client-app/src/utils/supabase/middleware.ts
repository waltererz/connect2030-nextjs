import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    let supabaseResponse = NextResponse.next({ request });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
                    supabaseResponse = NextResponse.next({ request });
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    )
                },
            },
        }
    )

    const { data: { user } } = await supabase.auth.getUser();

    // 사용자 로그인이 안 되었을 때 접근을 통제해야 하는 페이지 또는 경로
    if (pathname.startsWith('/forum') || pathname.startsWith('/proposal') || pathname.startsWith('/advisorygroup')) {
        if (!user) {
            const url = request.nextUrl.clone();
            url.pathname = '/auth/signin';
            return NextResponse.redirect(url);
        }
    }

    // 사용자 로그인이 되었을 때 접근을 통제해야 하는 페이지 또는 경로
    else {
        if (user) {
            const url = request.nextUrl.clone();
            url.pathname = '/';
            return NextResponse.redirect(url);
        }
    }

    return supabaseResponse;
}