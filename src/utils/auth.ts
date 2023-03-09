export const API_KEY: string = 'Authorization';

/**
 * 设置token
 * @param token 个人令牌
 */
export const setToken = (token: string): void => {
  sessionStorage.setItem(API_KEY, token);
};

/**
 * 获取token
 * @returns {(string | null)} token 个人令牌
 */
export const getToken = () => sessionStorage.getItem(API_KEY);

/**
 * 移除token
 */
export const removeToken = () => {
  return sessionStorage.removeItem(API_KEY);
};
