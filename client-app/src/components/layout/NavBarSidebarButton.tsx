'use client'

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Drawer from '@mui/material/Drawer';
import { TreeViewBaseItem } from '@mui/x-tree-view/models';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { ISiteStructure, site_structure } from '@/site.structure';

export default function NavBarSidebarButton(): React.ReactNode {

    // 모바일용 Drawer 열림/닫힘 상태 저장을 위한 state 지정
    const [open, setOpen] = useState<boolean>(false);

    // 모바일용 Drawer Toggle 함수
    const toggleDrawer = () => {
        setOpen(!open);
    }

    // 메뉴 아이템 저장 객체
    const MENUS: TreeViewBaseItem[] = [];

    // 중복된 ID를 유니크한 ID로 변환하고 트리 뷰에서 지원하는 형식으로 오브젝트 재작성
    const getMenuItem = (target: ISiteStructure, data: TreeViewBaseItem[]) => {

        // 트리뷰 오브젝트에 추가할 새로운 오브젝트 생성
        const newData = {
            id: data.length + 1,
            label: target.label,
            path: target.id,
            children: [],
        }

        // 자식 메뉴가 있는 경우 자식 메뉴의 오브젝트를 가져옴
        if (Array.isArray(target.children)) {
            const newChildren: any = [];

            target.children.map((childItem, index) => {
                newChildren.push({
                    id: `${data.length + 1}_${index}`,
                    label: childItem.label,
                    path: childItem.id,
                });
            });

            if (newChildren.length > 0) {
                newData.children = newChildren;
            }
        }

        return newData;
    }

    useEffect(() => {
        site_structure.forEach((item) => {
            MENUS.push(getMenuItem(item, MENUS));
        });
    }, []);

    return (
        <>
            <Avatar
                onClick={() => toggleDrawer()}
                sx={{
                    display: { md: 'flex', lg: 'none' },
                    backgroundColor: 'var(--primary-light)',
                    color: '#ffffff',
                    cursor: 'pointer',
                    mr: '10px',
                }}>
                <MenuIcon />
            </Avatar>
            <Drawer open={open} onClose={() => toggleDrawer()}>
                <Box sx={{
                    width: '300px',
                }}>
                    <RichTreeView items={site_structure} />
                </Box>
            </Drawer>
        </>
    );
}