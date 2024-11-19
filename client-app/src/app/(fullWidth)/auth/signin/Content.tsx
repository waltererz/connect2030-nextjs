'use server'

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BackdropWithoutButton from '@/components/BackdropWithoutButton';
import SignInFormControl from './FormControl';

export default async function Content(): Promise<React.ReactNode> {
    return (
        <>
            <BackdropWithoutButton zIndex={2000} />
            <Box sx={{
                position: 'absolute',
                top: '3%',
                left: '50%',
                transform: 'translate(-50%, 0%)',
                maxWidth: '600px',
                maxHeight: '600px',
                width: '100%',
                height: '100%',
                p: '24px',
                zIndex: 2001,
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    boxSizing: 'border-box',
                    backgroundColor: '#ffffff',
                    borderRadius: '50px',
                    boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.1), 0px 10px 50px rgba(0, 0, 0, 0.05)',
                    p: '24px',
                }}>
                    <Typography component="h3" sx={{ fontSize: '2.0rem', textAlign: 'center' }}>사용자 로그인</Typography>
                    <Typography component="h5" sx={{ fontSize: '1.1rem', textAlign: 'center', mt: 1 }}>
                        카카오 계정 또는 기타 이메일 계정으로 로그인할 수 있습니다.
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '95%',
                        mt: '36px',
                    }}
                    >
                        <SignInFormControl />
                    </Box>
                </Box>
            </Box>
        </>
    );
}