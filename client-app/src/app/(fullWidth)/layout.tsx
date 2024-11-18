import React from 'react';
import Content from '@/components/layout/Content';

export default function DefaultLayout({ children }: { children: Readonly<React.ReactNode> }) {
    return (
        <Content breadcrumbs={false} fullWidth>{children}</Content>
    );
}