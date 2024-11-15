'use client'

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FaceIcon from '@mui/icons-material/Face';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';

const dummy = [
    {
        id: '@',
        label: '정책제안 현황',
        selected: false,
    },
    {
        id: 'list',
        label: '정책제안 목록',
        selected: true,
        children: [
            {
                id: 'a',
                label: '카테고리 A',
                selected: false,
            },
            {
                id: 'b',
                label: '카테고리 B',
                selected: true,
            },
            {
                id: 'c',
                label: '카테고리 C',
                selected: false,
            },
        ],
    },
    {
        id: 'analysis',
        label: '정책제안 분석',
        selected: false,
    },
];

export default function Body({ children }: Readonly<{ children: React.ReactNode }>): React.ReactNode {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '100vh',
            pt: '88px',
        }}>
            <Box sx={{
                flexGrow: 0,
                width: '300px',
                height: '100%',
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
                    {dummy.map((item, index) => (
                        <React.Fragment key={`submenu-${index}`}>
                            <ListItemButton
                                selected={item.selected}
                                disableRipple
                                disableTouchRipple
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
                                        color: item.selected ? '#ffffff' : 'initial',
                                    }} />
                                </ListItemIcon>
                                <ListItemText primary={item.label} />
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
                                                    selected={subitem.selected}
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
                                                            fontWeight: item.selected ? 900 : 'initial',
                                                            transform: 'rotate(-180deg)',
                                                            color: subitem.selected ? '#000000' : '#999999',
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
            <Box sx={{
                flexGrow: 1,
                height: '100%',
            }}>
                <Box sx={{
                    height: '47px',
                }}>
                    <Typography component="div" sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignContent: 'center',
                    }}>
                        <ArrowBackIcon sx={{
                            mr: '7px',
                            fontSize: '1.4rem',
                        }} />
                        <Typography component="div" sx={{
                            fontSize: '1.0rem',
                            fontWeight: 600,
                            boxSizing: 'border-box',
                        }}>정책제안 목록 / 정책제안 @2024-2</Typography>
                    </Typography>
                </Box>
                <Box sx={{
                    height: 'calc(100% - 47px)',
                    boxSizing: 'border-box',
                    py: '25px',
                    px: '32px',
                    mr: '24px',
                    borderTopLeftRadius: '35px',
                    borderTopRightRadius: '35px',
                    backgroundColor: '#ffffff',
                }}>
                    {children}
                </Box>
            </Box>
        </Box >
    )
}