import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@/components/layout/Drawer';
import Content from '@/components/layout/Content';

export default function DefaultLayout({ children }: { children: Readonly<React.ReactNode> }) {
    return (
        <>
            <Drawer />
            <Content>{children}</Content>
        </>
    );
}