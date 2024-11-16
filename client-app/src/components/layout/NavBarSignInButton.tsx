'use client'

import React from 'react';
import { useRouter } from 'next-nprogress-bar';
import Avatar from '@mui/material/Avatar';
import LockOpenIcon from '@mui/icons-material/LockOpen';

export default function NavBarSignInButton(): React.ReactNode {

    const router = useRouter();

    return (
        <Avatar
            onClick={() => router.push('/auth/signin')}
            sx={{
                backgroundColor: '#ffffff',
                color: '#555555',
                cursor: 'pointer',
            }}>
            <LockOpenIcon />
        </Avatar>
    );
}