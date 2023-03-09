import { request } from 'umi';
import type { NoticeIconList } from './data';

export async function getNotices() {
  return request<NoticeIconList>('/api/notices', {
    method: 'GET',
  });
}
