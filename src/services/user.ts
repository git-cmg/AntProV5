import { request } from 'umi';
import type { API } from '@/services/API';

/**
 * 查询当前用户基本信息
 */
export async function queryCurrentUser() {
  return request<API.response<API.CurrentUser>>('/api/current');
}

/**
 * 查询菜单
 * @description 获取当前用户拥有权限的菜单
 */
export async function queryMenuData() {
  return request<API.response<API.MenuType[]>>('/api/current/menu');
}
