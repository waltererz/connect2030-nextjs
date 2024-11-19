'use server'

import React from 'react';
import Box from '@mui/material/Box';
import NavBarTitle from './NavBarTitle';
import NavBarMenus from './NavBarMenus';
import NavBarOptions from './NavBarOptions';
import NavBarSidebarButton from './NavBarSidebarButton';

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
            justifyContent: 'center',
            width: '100%',
            background: 'rgba(9, 0, 30, 0.9)',
            backdropFilter: 'blur(5px)',
            zIndex: 1001,
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                height: '75px',
                maxWidth: '1536px',                        // Extra Large
                px: { xs: '10px', lg: '24px' },
                boxSizing: 'border-box',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexGrow: 0,
                }}>
                    <NavBarSidebarButton />
                    <NavBarTitle />
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    flexGrow: 1,
                }}>
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
        </Box>
    );
}