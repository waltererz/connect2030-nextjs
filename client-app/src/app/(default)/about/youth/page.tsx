import type { Metadata } from 'next';
import PageTitleBox from '@/components/PageTitleBox';
import PageContentBox from '@/components/PageContentBox';

export const metadata: Metadata = {
    title: '2030 자문단이란?',
}

export default function Page() {
    return (
        <>
            <PageTitleBox>청년과 함께하는 정책 의사결정 과정 - 2030 자문단</PageTitleBox>
            <PageContentBox>
                이곳에서 2030 자문단을 설명합니다.
            </PageContentBox>
        </>
    );
}
