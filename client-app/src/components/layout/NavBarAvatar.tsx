'use client'

import React from 'react';
import { useRouter } from 'next-nprogress-bar';
import Chip from '@mui/material/Chip';

export default function NavBarAvatar(): React.ReactNode {

    const router = useRouter();

    return (
        <Chip
            label="Connect 2030"
            clickable={true}
            onClick={() => router.push('/')}
            sx={{
                height: '40px',
                boxSizing: 'border-box',
                mr: '30px',
                backgroundColor: 'var(--primary-light)',
                color: '#ffffff',
                fontWeight: 600,
                borderRadius: '50px',
                transition: 'opacity 0.2s ease-in',
                fontSize: '0.85rem',
                ':hover': {
                    backgroundColor: 'var(--primary-light)',
                    opacity: 0.8,
                }
            }}
        />
    );
}