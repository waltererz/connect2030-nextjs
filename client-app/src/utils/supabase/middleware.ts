import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

// 로그인 여부를 확인하고 페이지 접근 제어
export async function updateSession(request: NextRequest) {

    // 현재 경로를 구함
    const pathname = request.nextUrl.pathname;

    // HTTP Response를 가져옴
    let supabaseResponse = NextResponse.next({ request });

    // Supabase 인스턴스 생성
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

    // Supabase에서 사용자 정보를 가져옴
    // 로그인되지 않은 경우 null 반환
    const { data: { user } } = await supabase.auth.getUser();

    // 사용자 로그인이 안 되었을 때 접근을 통제해야 하는 페이지 또는 경로
    // 1. 정책토의 및 하위 페이지
    // 2. 정책제안 및 하위 페이지
    // 3. 2030 자문단 및 하위 페이지
    if (pathname.startsWith('/forum') || pathname.startsWith('/proposal') || pathname.startsWith('/advisorygroup')) {
        if (!user) {
            const url = request.nextUrl.clone();
            url.pathname = '/auth/signin';
            return NextResponse.redirect(url);
        }
    }

    // 사용자 로그인이 되었을 때 접근을 통제해야 하는 페이지 또는 경로
    // 1. 사용자 인증 및 하위 페이지
    else if (pathname.startsWith('/auth')) {
        if (user) {
            const url = request.nextUrl.clone();
            url.pathname = '/';
            return NextResponse.redirect(url);
        }
    }

    return supabaseResponse;
}