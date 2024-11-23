import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import KakaoSymbolIcon from './KakakSymbolIcon';

export default function KakaoSignInButton({ width = 400, height = 45 }: { width?: number, height?: number }): React.ReactNode {
    return (
        <Button
            variant="contained"
            disableElevation
            disableFocusRipple
            disableRipple
            disableTouchRipple
            sx={{
                position: 'relative',
                pl: '40px',
                width: '100%',
                height: '100%',
                maxWidth: width,
                maxHeight: height,
                backgroundColor: '#fee500',
                borderRadius: '12px',
                boxSizing: 'border-box',
                fontSize: '1.1rem',
                color: 'rgba(0, 0, 0, 0.85)',
            }}
        >
            <Box
                component="span"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'absolute',
                    left: '15px',
                }}
            >
                <KakaoSymbolIcon />
            </Box>
            카카오 로그인
        </Button>
    )
}