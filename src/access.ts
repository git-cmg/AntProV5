/**
 * 权限
 **/
import type { API } from '@/services/API';

export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    canRead: currentUser && currentUser.user_status === 1,
  };
}
