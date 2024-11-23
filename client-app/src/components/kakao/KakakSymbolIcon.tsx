import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

// 카카오 심볼 아이콘 출력
export default function KakaoSymbolIcon(): React.ReactNode {
    return (
        <SvgIcon>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="image/symbol/kakao" clipPath="url(#clip0_4010_142)">
                    <path id="image/symbol-kakao" opacity="0.902" fillRule="evenodd" clipRule="evenodd" d="M9 0.976013C4.29 0.976013 0 4.10501 0 7.96501C0 10.365 1.558 12.481 3.931 13.74L2.933 17.406C2.844 17.73 3.213 17.989 3.496 17.801L7.873 14.897C8.242 14.933 8.618 14.954 9 14.954C13.97 14.954 17.999 11.824 17.999 7.96501C17.999 4.10501 13.97 0.976013 9 0.976013Z" fill="black" fillOpacity="0.9" />
                </g>
                <defs>
                    <clipPath id="clip0_4010_142">
                        <rect width="18" height="18" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </SvgIcon>
    )
}