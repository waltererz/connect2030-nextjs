import React from 'react';
import Box from '@mui/material/Box';
import Breadcrumbs from './Breadcrumbs';

export default function Content({ children, fullWidth = false, breadcrumbs = true }: { children: React.ReactNode, fullWidth?: boolean, breadcrumbs?: boolean }): React.ReactNode {
    return (
        <>
            <Box sx={{
                ml: (fullWidth != undefined && fullWidth) ? { xs: '10px', lg: '24px' } : { xs: '10px', lg: '0px' },
                flexGrow: 1,
            }}>
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '325px',
                    backgroundColor: 'var(--primary-main)',
                    zIndex: -1,
                }} />
                <Box sx={{
                    minHeight: '100%',
                    boxSizing: 'border-box',
                    py: '25px',
                    px: '32px',
                    mr: { xs: '10px', lg: '24px' },
                    borderRadius: '15px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #efefef',
                    boxShadow: '0px 0px 2px 0px rgba(220, 220, 220, 0.5)',
                }}>
                    <Box>
                        {breadcrumbs != undefined && breadcrumbs && <Breadcrumbs />}
                    </Box>
                    {children}
                </Box>
            </Box>
        </>
    );
}