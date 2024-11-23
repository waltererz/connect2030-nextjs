import React from 'react';
import Box from '@mui/material/Box';

export default function Footer(): React.ReactNode {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: 'fit-content',
            minHeight: '150px',
            mt: '50px',
            backgroundColor: '#000000',
            color: '#ffffff',
            fontSize: { xs: '0.8rem', lg: '0.9rem', },
        }}>
            Copyright ~...~~~~
        </Box>
    )
}