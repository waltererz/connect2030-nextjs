import React from 'react';
import Box from '@mui/material/Box';

export default function PageContentBox({ children }: { children: React.ReactNode }): React.ReactNode {
    return (
        <Box sx={{
            fontSize: { xs: '0.9rem', lg: '1.1rem' },
            textAlign: 'justify',
        }}>
            {children}
        </Box>
    )
}