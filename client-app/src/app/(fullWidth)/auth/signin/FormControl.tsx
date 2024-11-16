'use client'

import React, { useState } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { supabaseSignIn } from '@/utils/supabase/signin';

export default function SignInFormControl(): React.ReactNode {
    // 로그인 계정 입력 값을 확인하기 위핸 상태
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    // 로그인 중 상태를 확인하기 위한 상태
    const [pending, setPending] = useState<boolean>(false);

    const handleSubmit = async () => {
        // 이메일과 패스워드가 입력되었는지 확인
        if (email.length < 1 || password.length < 1) {
            console.log('이메일 주소 또는 패스워드가 입력되지 않았습니다.');
            return;
        }

        await supabaseSignIn(email, password);
    }

    return (
        <CssVarsProvider>
            <FormControl sx={{ width: '95%' }}>
                <FormLabel>이메일 주소</FormLabel>
                <Input onChange={(e) => setEmail(e.target.value)} placeholder="mail@connect2030.com" name="email" size="lg" required />
            </FormControl>
            <FormControl sx={{ width: '95%', mt: 2 }}>
                <FormLabel>패스워드</FormLabel>
                <Input onChange={(e) => setPassword(e.target.value)} placeholder="*****" name="password" type="password" size="lg" required />
            </FormControl>
            <FormControl sx={{ mt: 4, width: '50%' }}>
                <Button onClick={handleSubmit} size="lg">로그인</Button>
            </FormControl>
        </CssVarsProvider>
    )
}