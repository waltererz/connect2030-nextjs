'use server'

import React from 'react';
import Avatar from '@mui/material/Avatar';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { createClient } from '@/utils/supabase/server';
import NavBarSignInButton from './NavBarSignInButton';
import NavBarSignOutButton from './NavBarSignOutButton';

async function getUserUuid() {
    // Supabase 인스턴스 생성
    const supabase = await createClient();

    // 사용자 정보 가져옴
    // 로그인되지 않은 경우 가져오는 정보 없음
    const { data: { user } } = await supabase.auth.getUser();

    return {
        props: {
            userUuid: user?.id || null,
        }
    }
}

export default async function NavBarOptions(): Promise<React.ReactNode> {

    // 사용자 UUID를 가져옴
    const userUuid = await getUserUuid();

    return (
        <>
            <Avatar sx={{
                backgroundColor: 'initial',
                color: '#ffffff',
                cursor: 'pointer',
                mr: 2,
            }}>
                <DarkModeIcon />
            </Avatar>
            {userUuid?.props.userUuid == null ? <NavBarSignInButton /> : <NavBarSignOutButton />}
        </>
    );
}