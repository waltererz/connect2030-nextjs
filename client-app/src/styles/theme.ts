'use client';

import { createTheme } from '@mui/material/styles';

// 공통 디자인을 유지해야 하는 경우 필요한 스타일 지정
export const theme = createTheme({
    palette: {
        primary: {
            light: '#704bc5',
            main: '#4212b1',
            dark: '#230073',
            contrastText: '#ffffff',
        },
    },
    typography: {
        fontFamily: `'Do Hyeon', 'Roboto', 'Noto Sans KR', 'Arial', sans-serif`,
    },
});