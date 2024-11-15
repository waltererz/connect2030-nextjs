'use client'

import React from 'react';
import { AppProgressBar } from 'next-nprogress-bar';
import { useTheme } from '@mui/material/styles';

export default function ProgressBar({ children }: { children: React.ReactNode }) {

    // 공통 테마 색상 사용 목적 hook 사용
    const theme = useTheme();

    return (
        <>
            {children}
            <AppProgressBar height="4px" color={theme.palette.primary.main} options={{ showSpinner: false }} shallowRouting />
        </>
    )
}