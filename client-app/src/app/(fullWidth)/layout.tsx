import React from 'react';
import Box from '@mui/material/Box';
import Content from '@/components/layout/Content';

export default function DefaultLayout({ children }: { children: Readonly<React.ReactNode> }) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '100vh',
            pt: '88px',
        }}>
            <Content breadcrumbs={false} fullWidth>{children}</Content>
        </Box>
    );
}