import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/styles/theme';
import ProgressBar from '@/components/layout/ProgressBar';
import NavBar from '@/components/layout/NavBar';
import Body from '@/components/layout/Body';
import Footer from '@/components/layout/Footer';
import '@fontsource/inter';
import '@/styles/globals.css';

// 타이틀 템플릿
const title = {
  default: '2030 Connect - 청년과 함께하는 정책',
  template: '%s | 2030 Connect',
}

// 사이트 설명
const description = '2030 자문단과 직접 소통하며 청년세대 의견을 정책에 반영하는 새로운 플랫폼';

// 최상위 레이아웃에서 지정하는 메타데이터
// 기본 타이틀과 타이틀 템플릿을 지정하여 앱 전체에서 일관된 타이틀명 유지
// 각 페이지마다 타이틀 지정 가능
export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: ['청년자문단', '2030자문단', '청년'],
  twitter: {
    card: 'summary',
    title: title,
    description: description,
  },
  openGraph: {
    siteName: title.default,
    title: title,
    description: description,
    url: process.env.NEXT_PUBLIC_BASE_URL,
  }
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  // 상단 내비게이션바를 가져옴
  const navBar = await NavBar();

  return (
    <html lang="ko">
      <body className="antialiased">
        <ThemeProvider theme={theme}>
          <ProgressBar>
            <AppRouterCacheProvider>
              <Body>
                {navBar}
                {children}
              </Body>
              <Footer />
            </AppRouterCacheProvider>
          </ProgressBar>
        </ThemeProvider>
      </body>
    </html>
  );
}
