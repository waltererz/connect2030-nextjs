'use server'

import React from 'react';
import Box from '@mui/material/Box';
import NavBarAvatar from './NavBarAvatar';
import NavBarMenus from './NavBarMenus';
import NavBarOptions from './NavBarOptions';

export default async function NavBar(): Promise<React.ReactNode> {

    // 다크모드 아이콘, 사용자 아이콘
    const navBarOptions = await NavBarOptions();

    return (
        <Box sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            display: 'flex',
            flexDirection: 'row',
            background: 'rgba(255,255,255,0)',
            backdropFilter: 'blur(6px)',
            alignItems: 'center',
            width: '100%',
            boxSizing: 'border-box',
            p: 3,
            zIndex: 1000,
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexGrow: 1,
            }}>
                <NavBarAvatar />
                <NavBarMenus />
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexGrow: 0,
            }}>
                {navBarOptions}
            </Box>
        </Box>
    );
}