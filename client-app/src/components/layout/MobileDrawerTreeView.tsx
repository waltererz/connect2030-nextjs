'use client'

import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next-nprogress-bar';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTreeItem2, UseTreeItem2Parameters } from '@mui/x-tree-view/useTreeItem2';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { TreeItem2Content, TreeItem2GroupTransition, TreeItem2IconContainer, TreeItem2Root } from '@mui/x-tree-view/TreeItem2';
import { TreeItem2Provider } from '@mui/x-tree-view/TreeItem2Provider';
import { TreeItem2Icon } from '@mui/x-tree-view/TreeItem2Icon';
import { SxProps } from '@mui/material/styles';

// 트리 스타일 적용을 위한 react 모듈 확장
declare module 'react' {
    interface CSSProperties {
        '--tree-view-color'?: string;
        '--tree-view-bg-color'?: string;
    }
}

// 트리 컴포넌트 확장
// 모바일용 Drawer 메뉴에 배경색, 아이콘 등을 적용할 수 있도록 해줌
interface StyledTreeItemProps extends Omit<UseTreeItem2Parameters, 'rootRef'>, React.HTMLAttributes<HTMLLIElement> {
    bgColor?: string;
    bgColorForDarkMode?: string;
    color?: string;
    colorForDarkMode?: string;
    path?: string;
    sx?: SxProps,
    labelIcon: React.ElementType<SvgIconProps> | undefined;
    labelInfo?: string;
    handler?: () => void;                   // toggleDrawer
}

const CustomTreeItemRoot = styled(TreeItem2Root)(({ theme }) => ({
    color: theme.palette.text.secondary,
}));

const CustomTreeItemContent = styled(TreeItem2Content)(({ theme }) => ({
    marginBottom: theme.spacing(0.3),
    color: theme.palette.text.secondary,
    paddingRight: theme.spacing(1),
    '&.expanded': {
        fontWeight: theme.typography.fontWeightRegular,
    },
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
    '&.focused, &.selected, &.selected.focused': {
        backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
        color: 'var(--tree-view-color)',
    }
}));

const CustomTreeItemIconContainer = styled(TreeItem2IconContainer)(({ theme }) => ({
    marginRight: theme.spacing(1),
}));

const CustomTreeItemGroupTransition = styled(TreeItem2GroupTransition)(({ theme }) => ({
    marginLeft: 0,
    [`& .content`]: {
        paddingLeft: theme.spacing(2),
    }
}));

// 공백 컴포넌트
export const EndIcon = (): React.ReactNode => {
    return <div style={{ width: 24 }} />;
}

// 커스텀 트리 아이템 컴포넌트
// 모바일용 Drawer에 사용되며, 추후 디자인 수정 가능
export const CustomTreeItem = React.forwardRef(function CustomTreeItem(props: StyledTreeItemProps, ref: React.Ref<HTMLLIElement>) {

    // SPA를 위한 라우터 hook
    const router = useRouter();

    // 공통 디자인 적용을 위한 테마 hook 사용
    const theme = useTheme();

    // 각각의 파라미터를 각각의 변수에 저장
    const {
        id,
        itemId,
        label,
        disabled,
        children,
        bgColor,
        color,
        path,
        handler,
        labelIcon: LabelIcon,
        labelInfo,
        colorForDarkMode,
        bgColorForDarkMode,
        ...other
    } = props;

    // 커스텀 트리의 주요 파라미터를 가져옴
    const {
        getRootProps,
        getContentProps,
        getIconContainerProps,
        getLabelProps,
        getGroupTransitionProps,
        status
    } = useTreeItem2({ id, itemId, children, label, disabled, rootRef: ref });

    // 색상 지정 (다크 모드 적용)
    const style = {
        '--tree-view-color': theme.palette.mode !== 'dark' ? color : colorForDarkMode,
        '--tree-view-bg-color': theme.palette.mode !== 'dark' ? bgColor : bgColorForDarkMode
    }

    return (
        <TreeItem2Provider itemId={itemId}>
            <CustomTreeItemRoot {...getRootProps({ ...other, style })}>
                <CustomTreeItemContent
                    {...getContentProps({
                        className: clsx('content', {
                            expanded: status.expanded,
                            selected: status.selected,
                            focused: status.focused,
                        }),
                    })}
                >
                    <CustomTreeItemIconContainer {...getIconContainerProps()}>
                        <TreeItem2Icon status={status} />
                    </CustomTreeItemIconContainer>
                    <Box sx={{
                        display: 'flex',
                        flexGrow: 1,
                        alignItems: 'center',
                        p: 0.5,
                        pr: 0,
                    }}>
                        {LabelIcon ? <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} /> : <Box color="inherit" sx={{ mr: 1 }} />}
                        <Typography {...getLabelProps({
                            variant: 'body2',
                            sx: {
                                display: 'flex',
                                fontWeight: 'inherit',
                                flexGrow: 1,
                                fontSize: '1.0rem',
                            }
                        })} onClick={() => {
                            if (path) router.push(path);
                            if (handler) handler();
                        }} />
                        <Typography variant="caption" color="inherit">{labelInfo}</Typography>
                    </Box>
                </CustomTreeItemContent>
                {children && (
                    <CustomTreeItemGroupTransition {...getGroupTransitionProps()} />
                )}
            </CustomTreeItemRoot>
        </TreeItem2Provider>
    );
});