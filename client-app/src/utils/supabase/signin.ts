// 로그인 서비스 함수
// 서버에서 실행되는 스크립트 (서버 콘솔에 메시지 출력)
'use server'

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import z from 'zod';

// Supabase Auth 활용한 로그인 기능 구현
const supabaseSignIn = async (email: string, password: string) => {

    // 입력받은 회원 정보가 적절한지, 비어있지 않은지 재확인
    // 입력되지 않은 값이 있는지 확인
    if (!email || !password) {
        console.log('입력되지 않은 항목이 있습니다.');
        return false;
    }

    // 이메일 주소 유효성 검사
    if (!z.string().email(email)) {
        console.log('유효하지 않은 이메일 주소입니다.');
        return false;
    }

    // Supabase 인스턴스 가져옴
    const supabase = await createClient();

    // Supabase Auth Sign In
    const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    // 로그인 완료 시 첫 페이지로 리다이렉트
    if (!error) {
        redirect('/');
    } else {
        console.log('로그인 실패', error);
    }
}

export { supabaseSignIn }