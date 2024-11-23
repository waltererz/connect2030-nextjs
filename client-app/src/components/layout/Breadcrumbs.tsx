'use client'

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { site_structure } from '@/site.structure';
import { findByIdOnlyOne } from '@/utils/site.structure';

interface IBreadcrumb {
    id: string;
    label: string;
}

export default function Breadcrumbs(): React.ReactNode {

    // 현재 경로를 저장하는 상태 생성
    const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[]>([]);

    // SPA를 위한 라우터 hook
    const router = useRouter();

    // 현재 경로를 분해하여 배열에 저장
    // selectedPath[0]: 사용되지 않음
    // selectedPath[1]: 1단계 경로 (1단계 경로가 없으면 루트)
    // selectedPath[2]: 2단계 경로 (1단계 경로는 있으나 2단계 경로가 없으면 1단계 경로)
    const pathname = usePathname();
    const current_path = pathname.split('/');

    // 페이지 변경 시에만 실행
    // 현재 경로를 단계별로 가져옴
    useEffect(() => {

        // 상태 초기화
        setBreadcrumbs(() => [
            {
                id: '/',
                label: 'CONNECT 2030',
            }
        ]);

        // 1단계 페이지 경로를 가져옴
        const result = findByIdOnlyOne(site_structure, current_path[1] == '' ? '@' : current_path[1]);

        // 1단계 페이지 경로가 있다면....
        if (result != null) {
            setBreadcrumbs((prev) => [
                ...prev,
                {
                    id: `/${result.id}`,
                    label: result.label,
                }
            ]);
        }

        // 2단계 메뉴가 있다면 하위 메뉴까지 확인
        if (Array.isArray(result?.children) && result.children.length > 0) {
            const child = findByIdOnlyOne(result.children, current_path[2] == '' ? '@' : current_path[2]);

            // 2단계 페이지 경로가 있다면....
            if (child != null) {
                const childId = child.id == '@' ? '' : child.id;

                setBreadcrumbs((prev) => [
                    ...prev,
                    {
                        id: `${result.id}/${childId}`,
                        label: child.label,
                    }
                ]);
            }
        }

    }, [pathname]);

    return (
        <Box sx={{
            height: '47px',
        }}>
            <Typography
                component="div"
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent: 'center',
                }}
            >
                <ArrowBackIcon sx={{
                    mr: '7px',
                    fontSize: '1.3rem',
                }} />
                <Typography
                    component="div"
                    sx={{
                        mt: '-2px',
                        fontSize: '1.0rem',
                        fontWeight: 400,
                        boxSizing: 'border-box',
                    }}
                >
                    {
                        breadcrumbs.map((item, index) => (
                            <React.Fragment key={index}>
                                <Link
                                    href="#"
                                    onClick={() => router.push(item.id)}
                                    sx={{
                                        textDecoration: 'none',
                                        color: 'var(--foreground)',
                                    }}
                                >{item.label}</Link>
                                {index < breadcrumbs.length - 1 && ' / '}
                            </React.Fragment>
                        ))
                    }
                </Typography>
            </Typography>
        </Box>
    )
}