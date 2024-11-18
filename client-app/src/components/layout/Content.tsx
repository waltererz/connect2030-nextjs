'use server'

import React from 'react';
import Box from '@mui/material/Box';
import Breadcrumbs from './Breadcrumbs';

export default async function Content({ children, fullWidth = false, breadcrumbs = true }: { children: React.ReactNode, fullWidth?: boolean, breadcrumbs?: boolean }): Promise<React.ReactNode> {
    return (
        <Box sx={{
            ml: (fullWidth != undefined && fullWidth) ? '24px' : { xs: '24px', lg: '348px' },
            flexGrow: 1,
        }}>
            {breadcrumbs != undefined && breadcrumbs && <Breadcrumbs />}
            <Box sx={{
                height: breadcrumbs != undefined && breadcrumbs ? 'calc(100% - 47px)' : '100%',
                boxSizing: 'border-box',
                py: '25px',
                px: '32px',
                mr: '24px',
                borderTopLeftRadius: '35px',
                borderTopRightRadius: '35px',
                backgroundColor: '#ffffff',
            }}>
                {children}
            </Box>
        </Box>
    );
}