import React from 'react';
import Box from '@mui/material/Box';

export default function Body({ children }: { children: React.ReactNode }): React.ReactNode {
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
                boxSizing: 'border-box',
                maxWidth: '1536px',       // Extra Large
                width: '100%',
                height: '100%',
                pt: '140px',
            }}>
                {children}
            </Box>
        </Box>
    );
}