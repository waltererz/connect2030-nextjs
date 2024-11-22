import React from 'react';
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