'use client'

import React from 'react';
import { useRouter } from 'next-nprogress-bar';
import Avatar from '@mui/material/Avatar';
import LockOpenIcon from '@mui/icons-material/LockOpen';

// 로그인 버튼 생성
export default function NavBarSignInButton(): React.ReactNode {

    const router = useRouter();

    return (
        <Avatar
            onClick={() => router.push('/auth/signin')}
            sx={{
                backgroundColor: 'initial',
                color: '#ffffff',
                cursor: 'pointer',
            }}>
            <LockOpenIcon />
        </Avatar>
    );
}