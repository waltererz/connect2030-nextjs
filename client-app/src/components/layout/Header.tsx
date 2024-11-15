import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { site_structure } from '@/site-structure';

export default function Header(): React.ReactNode {
    return (
        <Box sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'var(--background)',
            alignItems: 'center',
            width: '100%',
            boxSizing: 'border-box',
            p: 3,
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexGrow: 1,
            }}>
                <Avatar sx={{
                    mr: '30px',
                    backgroundColor: 'var(--primary-light)',
                    cursor: 'pointer',
                }}>H</Avatar>
                {site_structure.map((item, index) => (
                    <Chip
                        key={`mainitem-${index}`}
                        icon={<FaceIcon />}
                        label={item.label}
                        clickable={true}
                        className={index == 2 ? 'selected' : ''}
                        sx={{
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
                                fontWeight: 900,
                                '& .MuiSvgIcon-root': {
                                    color: '#f5f5f5',
                                },
                            },
                            '& .MuiSvgIcon-root': {
                                ml: '10px',
                            },
                            '& .MuiChip-label': {
                                pl: '15px',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                            }
                        }}
                    />
                ))}
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexGrow: 0,
            }}>
                <Avatar sx={{
                    backgroundColor: '#ffffff',
                    color: '#555555',
                    cursor: 'pointer',
                    mr: 2,
                }}>
                    <DarkModeIcon />
                </Avatar>
                <Avatar sx={{
                    backgroundColor: '#ffffff',
                    color: '#555555',
                    cursor: 'pointer',
                }}>
                    <LockOpenIcon />
                </Avatar>
            </Box>
        </Box>
    );
}