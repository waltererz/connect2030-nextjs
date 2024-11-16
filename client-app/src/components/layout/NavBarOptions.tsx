'use server'

import React from 'react';
import Avatar from '@mui/material/Avatar';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default async function NavBarOptions(): Promise<React.ReactNode> {
    return (
        <>
            <Avatar sx={{
                backgroundColor: '#ffffff',
                color: '#555555',
                cursor: 'pointer',
                mr: 2,
            }}>
                <DarkModeIcon />
            </Avatar>
            <Avatar sx={{
                backgroundColor: '#ffffff',
                color: '#555555',
                cursor: 'pointer',
            }}>
                <LockOpenIcon />
            </Avatar>
        </>
    );
}