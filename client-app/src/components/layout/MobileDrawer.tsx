'use client'

import React, { useState, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { CustomTreeItem, EndIcon } from './MobileDrawerTreeView';
import { ISiteStructure, site_structure } from '@/site.structure';

// 파라미터로 넘겨진 오브젝트를 가공하는 함수 (2단계: 재귀함수로 처리)
const resolveDuplicateIds = (targetData: ISiteStructure[], parent: string = '') => {
    // 반환 값
    const newData: ISiteStructure[] = [];

    // 부모 노드 ID가 @인 경우 공백으로 처리
    if (parent == '@') parent = '';

    targetData.map((item, index) => {
        // item 속성 중 display가 false인 경우 출력되지 않아야 하므로 return
        if (!item.display) return;

        // 새로운 아이템 객체
        // 복제하지 않으면 기존 객체를 참조하여 구조 자체가 변경되므로 반드시 복제하여 사용
        // 중첩 오브젝트는 재귀함수를 통해 처리하므로 깊은 복제는 필요하지 않음
        let newItem: ISiteStructure = { ...item };
        let newChildren: ISiteStructure[] = [];

        // 기존의 ID와 부모 노드 ID를 이용하여 페이지 경로(path)를 만들고, index를 ID에 입력
        // path에서 @는 공백으로 처리
        const itemId = !parent ? `${item.id}-${index}` : `${parent}-${item.id}-${index}`;
        const itemPath = item.id == '@' ? `/${parent}` : !parent ? `/${item.id}` : `/${parent}/${item.id}`;

        // 자식 노드가 있는 경우 재귀함수 실행
        if (Array.isArray(item.children)) {
            newChildren = resolveDuplicateIds(item.children, !parent ? `${item.id}` : `${parent}${item.id == '@' ? '' : `/${item.id}`}`);
        }

        // 수정된 내용을 기존의 오브젝트에 반영하고 newData에 push
        newItem.id = itemId;
        newItem.path = itemPath;
        newItem.children = newChildren;

        newData.push(newItem);
    });

    return newData;
}

// 모바일에서만 사용되는 Drawer 생성
export default function MobileDrawer({ open, handler }: { open: boolean, handler: () => void }): React.ReactNode {

    // 모바일용 Drawer 사이트 구조 state
    const [siteStructure, setSiteStructure] = useState<ISiteStructure[]>([]);

    // 최초 1회만 실행
    // MUI X Tree View 사용을 위해 사이트 구조(site_structure)에서 중복되는 ID를 재작성
    // ID를 유니크하게 새로 작성하고, 사이트 경로는 path에 저장함 - 재귀함수
    // 주의! 2단계 구조까지 지원함
    useEffect(() => {
        setSiteStructure(resolveDuplicateIds(site_structure));
    }, []);

    return (
        <Drawer
            open={open}
            onClose={handler}
            aria-hidden={!open ? true : false}
        >
            <Box sx={{
                width: '300px',
            }}>
                <Box sx={{
                    height: '60px',
                    boxSizing: 'border-box',
                    p: 2,
                    textAlign: 'center',
                    fontWeight: 600,
                }}>
                    CONNECT 2030
                </Box>
                <SimpleTreeView
                    aria-label="connect2030-mobile"
                    slots={{
                        expandIcon: ArrowRightIcon,
                        collapseIcon: ArrowDropDownIcon,
                        endIcon: EndIcon,
                    }}
                    sx={{
                        flexGrow: 1,
                        maxWidth: '400px',
                    }}
                >
                    {siteStructure.map((item, index) => (
                        <CustomTreeItem handler={handler} key={`1-${index}`} itemId={item.id} label={item.label} labelIcon={item.icon} path={item.path}>
                            {item.children && item.children.map((subitem, subindex) => (
                                <CustomTreeItem handler={handler} key={`2-${subindex}`} itemId={subitem.id} label={subitem.label} labelIcon={subitem.icon} path={subitem.path} />
                            ))}
                        </CustomTreeItem>
                    ))}
                </SimpleTreeView>
            </Box>
        </Drawer>
    )
}