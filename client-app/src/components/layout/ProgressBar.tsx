'use client'

import React from 'react';
import { AppProgressBar } from 'next-nprogress-bar';
import { useTheme } from '@mui/material/styles';

// 페이지 이동 시 상태바 생성
export default function ProgressBar({ children }: { children: React.ReactNode }) {
    const theme = useTheme();
    return (
        <>
            {children}
            <AppProgressBar height="4px" color={theme.palette.primary.light} options={{ showSpinner: false }} shallowRouting />
        </>
    )
}