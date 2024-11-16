import React from 'react';
import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
    title: '사용자 로그인',
}

export default function Page(): React.ReactNode {
    return (
        <Content />
    );
}