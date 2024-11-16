'use client'

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FaceIcon from '@mui/icons-material/Face';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';
import { ISiteStructure, site_structure } from '@/site.structure';
import { findById } from '@/utils/site.structure';

export default function Drawer(): React.ReactNode {
    // 사이드메뉴를 저장하는 상태 생성
    const [children, setChildren] = useState<ISiteStructure[]>([]);

    // SPA를 위한 라우터 hook
    const router = useRouter();

    // 현재 경로를 분해하여 배열에 저장
    // selectedPath[0]: 사용되지 않음
    // selectedPath[1]: 1단계 경로 (1단계 경로가 없으면 루트)
    // selectedPath[2]: 2단계 경로 (1단계 경로는 있으나 2단계 경로가 없으면 1단계 경로)
    const pathname = usePathname();
    const current_path = pathname.split('/');

    // 페이지 변경 시에만 실행
    // 현재 페이지의 사이드 메뉴를 가져옴
    useEffect(() => {
        // 현재 페이지에 사이드메뉴가 존재하는지 확인
        const result = findById(site_structure, current_path[1]);

        // 자식 메뉴가 존재하는지 확인 후 상태에 저장
        if (Array.isArray(result?.children)) {
            setChildren(result.children);
        } else {
            // 자식 메뉴가 존재하지 않으면 공백 반환
            setChildren([]);
        }
    }, [pathname]);

    return (
        <Box sx={{
            position: 'fixed',
            flexGrow: 0,
            width: '300px',
            height: '100vh',
            boxSizing: 'border-box',
            mx: '24px',
            py: '25px',
            px: '20px',
            borderTopLeftRadius: '35px',
            borderTopRightRadius: '35px',
            backgroundColor: '#ffffff',
        }}>
            <List
                component="nav"
                sx={{
                    width: '100%',
                }}
            >
                {children.map((item, index) => (
                    <React.Fragment key={`submenu-${index}`}>
                        <ListItemButton
                            selected={current_path[2] == item.id || (typeof current_path[2] != 'string' && item.id == '@') ? true : false}
                            disableRipple
                            disableTouchRipple
                            onClick={!Array.isArray(item.children) ? () => { const id = item.id == '@' ? '' : item.id; router.push(`/${current_path[1]}/${id}`) } : undefined}
                            sx={{
                                mb: 2,
                                borderRadius: '40px',
                                '&.Mui-selected': {
                                    backgroundColor: 'var(--primary-main)',
                                    color: '#ffffff',
                                    ':hover': {
                                        backgroundColor: 'var(--primary-main)',
                                        opacity: 1,
                                    },
                                },
                            }}
                        >
                            <ListItemIcon sx={{
                                minWidth: '35px',
                            }}>
                                <FaceIcon sx={{
                                    color: current_path[2] == item.id || (typeof current_path[2] != 'string' && item.id == '@') ? '#ffffff' : 'initial',
                                }} />
                            </ListItemIcon>
                            <ListItemText
                                primary={item.label}
                                sx={{
                                    '& .MuiTypography-root': {
                                        pt: '2px',
                                        fontSize: '1.2rem',
                                    }
                                }}
                            />
                            {Array.isArray(item.children) && (
                                <KeyboardArrowDown
                                    sx={[
                                        {
                                            mr: '0px',
                                            opacity: 1,
                                            transition: '0.2s',
                                        },
                                        (item.children.length > 0) ? { transform: 'rotate(-180deg)' } : { transform: 'rotate(0)' },
                                    ]}
                                />
                            )}
                        </ListItemButton>
                        {
                            Array.isArray(item.children) && item.children.length > 0 && (
                                <List component="nav" sx={{ width: '100%', mt: '-16px' }}>
                                    <Box sx={{ pl: '20px', boxSizing: 'border-box' }}>
                                        {item.children.map((subitem, subindex) => (
                                            <ListItemButton
                                                key={`submenu-${index}-${subindex}`}
                                                selected={current_path[3] == subitem.id || subitem.id == '@'}
                                                disableRipple
                                                disableTouchRipple
                                                sx={{
                                                    height: '40px',
                                                    mb: 1,
                                                    borderRadius: '40px',
                                                    color: '#999999',
                                                    '&.Mui-selected': {
                                                        backgroundColor: '#ffffff',
                                                        color: '#000000',
                                                        fontWeight: 900,
                                                        ':hover': {
                                                            backgroundColor: '#ffffff',
                                                            opacity: 1,
                                                        },
                                                    }
                                                }}
                                            >
                                                <ListItemIcon sx={{
                                                    minWidth: '35px',
                                                }}>
                                                    <TurnLeftIcon sx={{
                                                        fontWeight: current_path[2] == item.id || (typeof current_path[2] != 'string' && item.id == '@') ? 900 : 'initial',
                                                        transform: 'rotate(-180deg)',
                                                        color: current_path[3] == subitem.id || subitem.id == '@' ? '#000000' : '#999999',
                                                    }} />
                                                </ListItemIcon>
                                                <ListItemText primary={subitem.label} />
                                            </ListItemButton>
                                        ))}
                                    </Box>
                                </List>
                            )
                        }
                    </React.Fragment>
                ))}
            </List>
        </Box>
    );
}