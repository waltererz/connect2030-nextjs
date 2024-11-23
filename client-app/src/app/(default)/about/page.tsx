import type { Metadata } from 'next';
import PageTitleBox from '@/components/PageTitleBox';
import PageContentBox from '@/components/PageContentBox';

export const metadata: Metadata = {
    title: '서비스 소개',
}

export default function Page() {
    return (
        <>
            <PageTitleBox>서비스 소개</PageTitleBox>
            <PageContentBox>
                테스트 페이지
            </PageContentBox>
        </>
    );
}
