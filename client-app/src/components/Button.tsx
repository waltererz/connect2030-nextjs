import React from 'react';
import MuiButton from '@mui/material/Button';
import { Box, SxProps } from '@mui/material';

export default function Button({
    width = 200,
    height = 45,
    fontSize = '0.9rem',
    color = 'rgba(0, 0, 0, 0.85)',
    label,
    startIcon,
    sx }: {
        width?: number,
        height?: number,
        fontSize?: string,
        color?: string,
        label: string,
        startIcon: React.ReactNode,
        sx?: SxProps
    }): React.ReactNode {
    return (
        <MuiButton
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
                backgroundColor: '#efefef',
                borderRadius: '12px',
                boxSizing: 'border-box',
                fontSize: fontSize,
                color: color,
                ...sx,
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
                {startIcon}
            </Box>
            {label}
        </MuiButton>
    )
}