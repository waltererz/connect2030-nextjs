import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

const dummy = [
  {
    id: 1,
    subject: '병사 봉급 250만 원 인상에 대한 건의',
    content: '병사 봉급을 250만 원까지 인상하는 것에 대해서 다른 자문단원분들의 의견이 궁금합니다.',
  },
  {
    id: 2,
    subject: '육군 현역병 자대배치 제도 개선',
    content: '육군에 해군이나 공군과 유사한 병 자대복무 배치 제도가 도입되었으면 합니다.',
  },
  {
    id: 3,
    subject: '예비역 재임용 제도 개선 건의',
    content: '예비역 재임용 절차를 완화하여 예비군 자원 활용 극대화를 건의합니다.',
  },
];

export default function Page() {
  return (
    <>
      <Box
        component="div"
        className="special-font"
        sx={{
          fontSize: '3.0rem',
        }}
      >
        Connect 2030
      </Box>
      <Box
        component="div"
        className="special-font"
        sx={{
          fontSize: '2.0rem',
        }}
      >
        테스트 페이지
      </Box>
      <Box sx={{ mt: '50px' }}>
        {dummy.map((article, index) => (
          <Box
            key={`article-${index}`}
            sx={{
              mb: 3,
              maxWidth: '500px',
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Avatar
              sx={{
                backgroundColor: 'var(--primary-light)',
                width: '64px',
                height: '64px',
                borderRadius: '17px',
                fontSize: '1.8rem',
              }}
            >
              H
            </Avatar>
            <Box sx={{ ml: '15px', flexGrow: 1, }}>
              <Box sx={{
                fontWeight: 900,
                fontSize: '1.2rem',
                textAlign: 'justify',
              }}>
                {article.subject}
              </Box>
              <Box sx={{
                fontSize: '1.0rem',
                lineHeight: 1.1,
                color: '#777777',
                textAlign: 'justify',
              }}>
                {article.content}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}
