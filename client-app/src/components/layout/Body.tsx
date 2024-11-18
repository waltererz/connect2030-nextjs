'use server'

import React from 'react';
import Box from '@mui/material/Box';

export default async function Body({ children }: { children: React.ReactNode }): Promise<React.ReactNode> {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: '100vh',
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                maxWidth: '1536px',       // Extra Large
                width: '100%',
                height: '100%',
                pt: '88px',
            }}>
                {children}
            </Box>
        </Box>
    );
}