interface ISiteStructure {
    id: string;
    label: string;
    children?: ISiteStructure[];
}

export const site_structure: Readonly<ISiteStructure[]> = [
    {
        id: 'about',
        label: '서비스 소개',
        children: [
            {
                id: '2030youth',
                label: '청년과 함께하는 정책',
            }
        ],
    },
    {
        id: 'forum',
        label: '정책토의',
        children: [
            {
                id: 'list',
                label: '정책토의',
            },
            {
                id: 'create',
                label: '정책토의 생성',
            },
        ],
    },
    {
        id: 'proposal',
        label: '정책제안',
        children: [
            {
                id: 'list',
                label: '정책제안',
            },
            {
                id: 'create',
                label: '정책제안 생성',
            },
        ],
    },
    {
        id: 'advisorygroup',
        label: '2030 자문단',
        children: [
            {
                id: 'rokmnd2030',
                label: '국방부 2030 자문단',
            },
        ],
    },
];