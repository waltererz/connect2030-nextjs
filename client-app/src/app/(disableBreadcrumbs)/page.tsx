import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import PageTitleBox from '@/components/PageTitleBox';
import PageContentBox from '@/components/PageContentBox';

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
      <PageTitleBox>Connect 2030</PageTitleBox>
      <PageContentBox>
        테스트 페이지
      </PageContentBox>
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
              }}
            >
              H
            </Avatar>
            <Box sx={{ ml: '15px', flexGrow: 1, }}>
              <Box sx={{
                fontWeight: 900,
                textAlign: 'justify',
              }}>
                {article.subject}
              </Box>
              <Box sx={{
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
