import React from 'react';
import Box from '@mui/material/Box';
import Drawer from './Drawer';
import Content from './Content';

export default function Body({ children }: Readonly<{ children: React.ReactNode }>): React.ReactNode {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '100vh',
            pt: '88px',
        }}>
            <Drawer />
            <Content>{children}</Content>
        </Box>
    );
}