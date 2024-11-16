import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Content({ children, fullWidth = false, breadcrumbs = true }: { children: React.ReactNode, fullWidth?: boolean, breadcrumbs?: boolean }): React.ReactNode {
    return (
        <Box sx={{
            ml: fullWidth != undefined && fullWidth ? '24px' : '348px',
            flexGrow: 1,
        }}>
            {breadcrumbs != undefined && breadcrumbs && (
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
                            fontSize: '1.1rem',
                            fontWeight: 400,
                            boxSizing: 'border-box',
                        }}>정책제안 목록 / 정책제안 @2024-2</Typography>
                    </Typography>
                </Box>
            )}
            <Box sx={{
                height: breadcrumbs != undefined && breadcrumbs ? 'calc(100% - 47px)' : '100%',
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
    );
}