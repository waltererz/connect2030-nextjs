'use server'

import React from 'react';
import Box from '@mui/material/Box';
import Breadcrumbs from './Breadcrumbs';

export default async function Content({ children, fullWidth = false, breadcrumbs = true }: { children: React.ReactNode, fullWidth?: boolean, breadcrumbs?: boolean }): Promise<React.ReactNode> {
    return (
        <>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '325px',
                backgroundColor: 'var(--primary-main)',
                zIndex: 1100,
            }} />
            <Box sx={{
                ml: (fullWidth != undefined && fullWidth) ? '24px' : { xs: '24px', lg: '348px' },
                flexGrow: 1,
                zIndex: 1110,
            }}>
                <Box sx={{
                    height: breadcrumbs != undefined && breadcrumbs ? 'calc(100% - 47px)' : '100%',
                    boxSizing: 'border-box',
                    py: '25px',
                    px: '32px',
                    mr: '24px',
                    borderRadius: '15px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #efefef',
                }}>
                    <Box>
                        {breadcrumbs != undefined && breadcrumbs && <Breadcrumbs />}
                    </Box>
                    {children}
                </Box>
            </Box>
        </>
    );
}