'use client'

import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import MobileDrawer from './MobileDrawer';

// 모바일에서 좌측 상단에 Drawer 버튼 생성
export default function NavBarSidebarButton(): React.ReactNode {

    // 모바일용 Drawer 열림/닫힘 상태 저장을 위한 state 지정
    const [open, setOpen] = useState<boolean>(false);

    // 모바일용 Drawer Toggle 함수
    const toggleDrawer = () => {
        setOpen(!open);
    }

    return (
        <>
            <Avatar
                onClick={toggleDrawer}
                sx={{
                    display: { md: 'flex', lg: 'none' },
                    backgroundColor: 'var(--primary-light)',
                    color: '#ffffff',
                    cursor: 'pointer',
                    mr: '10px',
                }}>
                <MenuIcon />
            </Avatar>
            <MobileDrawer open={open} handler={toggleDrawer} />
        </>
    );
}