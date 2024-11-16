// 사이트에서 사용자와 관리자가 접속할 수 있는 모든 페이지 명시
// 메뉴에 출력되지 않더라도 존재하는 페이지라면 반드시 명시

import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Groups3Icon from '@mui/icons-material/Groups3';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CampaignIcon from '@mui/icons-material/Campaign';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

// 페이지 구조 저장 변수 인터페이스
export interface ISiteStructure {
    id: string;                                              // 페이지 또는 메뉴 ID
    label: string;                                           // 페이지 이름 또는 메뉴명
    display?: boolean;                                       // 메뉴로 출력하는지의 여부
    icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;  // 메뉴 아이콘
    children?: ISiteStructure[];                             // 자식 메뉴 배열
}

export const site_structure: ISiteStructure[] = [
    {
        id: '@',
        label: '첫 페이지',
        display: false,
        children: [
            {
                id: 'about/youth',
                label: '청년과 함께하는 정책',
                display: true,
                icon: RecordVoiceOverIcon,
            },
            {
                id: 'forum',
                label: '정책토의',
                display: true,
                icon: Groups3Icon,
            },
            {
                id: 'proposal',
                label: '정책제안',
                display: true,
                icon: CampaignIcon,
            },
        ],
    },
    {
        id: 'about',
        label: '서비스 소개',
        display: true,
        icon: LibraryBooksIcon,
        children: [
            {
                id: 'youth',
                label: '청년과 함께하는 정책',
                display: true,
                icon: RecordVoiceOverIcon,
            }
        ],
    },
    {
        id: 'forum',
        label: '정책토의',
        display: true,
        icon: Groups3Icon,
        children: [
            {
                id: '@',
                label: '정책토의',
                display: true,
                icon: Groups3Icon,
            },
            {
                id: 'create',
                label: '정책토의 생성',
                display: true,
                icon: EditNoteIcon,
            },
        ],
    },
    {
        id: 'proposal',
        label: '정책제안',
        display: true,
        icon: CampaignIcon,
        children: [
            {
                id: '@',
                label: '정책제안',
                display: true,
                icon: CampaignIcon,
            },
            {
                id: 'create',
                label: '정책제안 생성',
                display: true,
                icon: EditNoteIcon,
            },
        ],
    },
    {
        id: 'advisorygroup',
        label: '국방부 2030 자문단',
        display: true,
        icon: MilitaryTechIcon,
        children: [
            {
                id: '@',
                label: '국방부 2030 자문단',
                display: true,
            },
        ],
    },
    {
        id: 'auth',
        label: '사용자 인증',
        children: [
            {
                id: 'signup',
                label: '사용자 등록 신청',
            },
            {
                id: 'signin',
                label: '사용자 로그인',
            },
        ],
    }
];