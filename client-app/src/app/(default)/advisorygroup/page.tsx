import type { Metadata } from 'next';
import PageTitleBox from '@/components/PageTitleBox';
import PageContentBox from '@/components/PageContentBox';

export const metadata: Metadata = {
    title: '국방부 2030 자문단',
}

export default function Page() {
    return (
        <>
            <PageTitleBox>국방부 2030 자문단에 오신 것을 환영합니다!</PageTitleBox>
            <PageContentBox>
                테스트 페이지
            </PageContentBox>
        </>
    );
}
