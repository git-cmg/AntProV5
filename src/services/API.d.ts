import type { MenuDataItem } from '@ant-design/pro-components';

declare namespace API {
  /**
   * 统一返回数据结构
   */
  export interface response<T = null> {
    // if request is success
    success: boolean;
    // response data
    data: T;
    // code for errorType
    errorCode?: string;
    // message display to user
    errorMessage?: string;
    // error display type: 0 silent; 1 message.warn; 2 message.error; 4 notification; 9 page
    showType?: number;
    // Convenient for back-end Troubleshooting: unique request ID
    traceId?: string;
    // onvenient for backend Troubleshooting: host of current access server
    host?: string;
  }

  /**
   * 列表查询-数据结构（data:TableList）
   */
  export interface TableList<T> {
    list: T[];
    current: number;
    pageSize: number;
    total: number;
  }

  /**
   * 当前用户基本信息
   */
  export interface CurrentUser {
    // 用户状态：0 锁定；1 正常
    user_status: number;
    // 用户ID
    user_id: number;
    // 用户名
    user_name: string;
    // 用户头像
    user_profile: string;
    // 未读消息数（用于NoticeIcon组件）
    unreadCount?: number;
  }

  /**
   * 页面权限
   */
  export interface Operation {
    // 权限id
    permission_id: string;
    // 权限名称
    permission_name: string;
    children?: Operation[];
    // 权限描述
    permission_description: string;
  }

  /**
   * 菜单-数据结构
   */
  export interface MenuType extends MenuDataItem {
    // 菜单父级id
    menu_parent_id: number;
    // 菜单id
    menu_id: number;
    children?: MenuType[];
  }
}
