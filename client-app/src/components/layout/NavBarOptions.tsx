'use server'

import React from 'react';
import Avatar from '@mui/material/Avatar';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NavBarSignInButton from './NavBarSignInButton';

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
            <NavBarSignInButton />
        </>
    );
}