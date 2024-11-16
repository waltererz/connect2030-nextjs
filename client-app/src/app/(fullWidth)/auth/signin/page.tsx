import React from 'react';
import type { Metadata } from 'next';
import Content from './Content';

export const metadata: Metadata = {
    title: '사용자 로그인',
}

export default async function Page(): Promise<React.ReactNode> {
    const content = await Content();
    return (
        <>
            {content}
        </>
    );
}