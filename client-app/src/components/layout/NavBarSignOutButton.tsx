'use client'

import React from 'react';
import { supabaseSignOut } from '@/utils/supabase/signout';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';

export default function NavBarSignOutButton(): React.ReactNode {
    return (
        <Avatar
            onClick={() => supabaseSignOut()}
            sx={{
                backgroundColor: '#ffffff',
                color: '#555555',
                cursor: 'pointer',
            }}>
            <LogoutIcon />
        </Avatar>
    );
}