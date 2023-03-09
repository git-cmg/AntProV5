import { request } from 'umi';
import type { API } from '@/services/API';
import qs from 'qs';

/**
 * 登录-请求参数
 */
export interface LoginParams {
  // 用户名
  username: string;
  // 密码
  password: string;
  // 以下字段用于 Ant Pro 登录
  autoLogin?: boolean;
  type?: string;
}

/**
 * 登录-响应参数
 */
export interface LoginType {
  // 过期时间与令牌在项目中是必须返回的字段
  // 此处改为可选，方便兼容 Ant Pro 登录界面
  // 过期时间
  period?: number;
  // 令牌
  token?: string;
  // 以下字段用于 Ant Pro 登录
  status?: string;
  type?: string;
  currentAuthority?: string;
}

/**
 * 登录
 */
export async function login(params: LoginParams) {
  return request<LoginType>('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(params),
  });
}

/**
 * 发送验证码
 * @param phone 手机号
 */
export async function getFakeCaptcha(phone?: string) {
  return request<API.response<string>>('/api/login/captcha', {
    method: 'GET',
    params: { phone },
  });
}

/**
 * 退出登录
 */
export async function outLogin() {
  return request<boolean>('/api/outLogin', {
    method: 'POST',
  });
}
