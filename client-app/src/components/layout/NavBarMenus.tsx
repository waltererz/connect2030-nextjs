'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
import Chip from '@mui/material/Chip';
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
                <Chip
                    key={`mainitem-${index}`}
                    icon={item.icon ? item.icon : undefined}
                    label={item.label}
                    clickable={true}
                    className={current_path[1] == item.id ? 'selected' : ''}
                    onClick={() => router.push(`/${item.id}`)}
                    sx={{
                        display: item.display ? 'flex' : 'none',
                        minWidth: '100px',
                        height: '40px',
                        mr: '12px',
                        p: '5px',
                        boxSizing: 'border-box',
                        borderRadius: '50px',
                        color: '#666666',
                        backgroundColor: '#e5e5e5',
                        ':last-child': {
                            mr: '0px',
                        },
                        '&.selected': {
                            backgroundColor: '#3c3c3c',
                            color: '#f5f5f5',
                            fontWeight: 600,
                            '& .MuiSvgIcon-root': {
                                color: '#f5f5f5',
                            },
                        },
                        '& .MuiSvgIcon-root': {
                            ml: '10px',
                        },
                        '& .MuiChip-label': {
                            pl: '15px',
                            fontSize: '1.0rem',
                            fontWeight: 400,
                        }
                    }}
                />
            ))}
        </>
    )
}