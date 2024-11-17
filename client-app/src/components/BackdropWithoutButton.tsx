'use client'

import React from 'react';
import { useRouter } from 'next-nprogress-bar';
import Backdrop from '@mui/material/Backdrop';

export default function BackdropWithoutButton({ zIndex }: { zIndex?: number }): React.ReactNode {

    const router = useRouter();

    return (
        <Backdrop
            sx={(theme) => ({ color: '#ffffff', zIndex: zIndex ? zIndex : theme.zIndex.drawer + 1 })}
            open={true}
            onClick={() => router.back()}
        />
    );
}