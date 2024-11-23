import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function PageTitleBox({ children }: { children: React.ReactNode }): React.ReactNode {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            mb: 3,
        }}>
            <DashboardIcon />
            <Typography
                component="h3"
                sx={{
                    mt: '-2px',
                    ml: '10px',
                    fontSize: { xs: '1.2rem', lg: '1.4rem' },
                    fontWeight: 900,
                }}
            >
                {children}
            </Typography>
        </Box>
    )
}