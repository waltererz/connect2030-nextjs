'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
import Button from '@mui/material/Box';
import Box from '@mui/material/Box';
import { site_structure } from '@/site.structure';

export default function NavBarMenus(): React.ReactNode {

    // SPA를 위한 라우터 가져옴
    const router = useRouter();

    // 현재 경로를 분해하여 배열에 저장
    // selectedPath[0]: 사용되지 않음
    // selectedPath[1]: 1단계 경로 (1단계 경로가 없으면 루트)
    // selectedPath[2]: 2단계 경로 (1단계 경로는 있으나 2단계 경로가 없으면 1단계 경로)
    const pathname = usePathname();
    const current_path = pathname.split('/');

    return (
        <>
            {site_structure.map((item, index) => (
                <Button
                    key={`mainitem-${index}`}
                    className={current_path[1] == item.id ? 'selected' : ''}
                    onClick={() => router.push(`/${item.id}`)}
                    sx={{
                        display: { xs: 'none', lg: (item.display ? 'flex' : 'none') },
                        justifyContent: 'center',
                        minWidth: '100px',
                        height: '75px',
                        p: '8px',
                        boxSizing: 'border-box',
                        color: '#aaaaaa',
                        cursor: 'pointer',
                        ':last-child': {
                            p: 0,
                        },
                        '&.selected': {
                            borderBottom: '3px solid var(--primary-light)',
                            pt: '11px',
                            color: '#ffffff',
                            '& .MuiSvgIcon-root': {
                                color: '#ffffff',
                            },
                        },
                        '& .MuiChip-label': {
                            pl: '15px',
                            fontSize: '1.05rem',
                            fontWeight: 400,
                        }
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>{item.label}</Box>
                </Button>
            ))}
        </>
    )
}