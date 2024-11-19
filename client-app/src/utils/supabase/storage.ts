import { SupportedStorage } from '@supabase/supabase-js';

// Supabase Storage 커스텀 어댑터
// 사용자 인증의 서버 렌더링을 위해 필요
export const customStorageAdapter: SupportedStorage = {
    getItem: (key) => {
        return globalThis.localStorage.getItem(key);
    },
    setItem: (key, value) => {
        globalThis.localStorage.setItem(key, value);
    },
    removeItem: (key) => {
        globalThis.localStorage.removeItem(key);
    },
}