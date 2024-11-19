'use client'

import React from 'react';
import { useRouter } from 'next-nprogress-bar';
import Box from '@mui/material/Box';

export default function NavBarTitle(): React.ReactNode {

    const router = useRouter();

    return (
        <Box
            onClick={() => router.push('/')}
            sx={{
                boxSizing: 'border-box',
                color: '#ffffff',
                fontSize: '1.5rem',
                cursor: 'pointer',
            }}
        >
            CONNECT 2030
        </Box>
    );
}