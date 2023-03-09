/**
 * 格式化菜单数据-工具集
 * @author: cmg
 * @time: 2021-03-24 15:19:04
 */
import { ReactComponent as home } from '@/icon/common/home.svg';
import type { API } from '@/services/API';
import type { DataNode } from 'antd/lib/tree';
import Icon, { SmileOutlined } from '@ant-design/icons';

/**
 * 菜单icon-集合
 */
const IconMap = {
  home: <Icon component={home} />,
  smile: <SmileOutlined />,
};

/**
 * 权限树-树节点
 */
export type Node = {
  title: string;
  // 权限描述
  permission_description: string;
  key: string;
  children: Node[];
} & DataNode;

/**
 * 处理导航菜单icon
 */
export const loopMenuItem = (menus: API.MenuType[]): API.MenuType[] =>
  // 参考从服务器加载 menu 并且使用 icon
  // https://procomponents.ant.design/components/layout#prolayout
  menus.map(({ icon, children, ...item }) => ({
    ...item,
    icon: icon && IconMap[icon as string],
    children: children && loopMenuItem(children),
  }));

/**
 * 权限树
 * 将权限数据转化为Antd Tree所需的树节点Node
 * API.Operation[]->Node[]
 */
export const getDataNode = (array: API.Operation[]): Node[] => {
  return array.map(
    ({ permission_name, permission_description, permission_id, children, ...item }) => ({
      ...item,
      title: permission_name,
      permission_description: permission_description,
      key: `${permission_id}`,
      children: children ? getDataNode(children) : [],
    }),
  );
};

/**
 * 权限id-集合
 * API.Operation[]->string[]
 */
const getCheckedKeys = (arr: API.Operation[]): string[] => {
  return arr.map((item) => {
    return `${item.permission_id}`;
  });
};

/**
 * 权限树
 * 将用户已拥有的权限（权限树）扁平化为权限id数组
 * 用于权限树已勾选项
 */
export const loopMenuRole = (arr: API.Operation[]): string[] => {
  let array: string[] = [];

  arr.forEach((item) => {
    if (arr) array = array.concat(getCheckedKeys(arr));
    if (item.children) {
      array = array.concat(loopMenuRole(item.children));
    }
  });

  return array;
};

/**
 * API.MenuType->{ value: string }
 */
const getMenuName = (menu: API.MenuType): { value: string } => ({ value: menu.name! });

/**
 * 菜单搜索-返回所有菜单name
 * 因Antd Input提示项需要，返回value
 */
export const loopMenuName = (arr: API.MenuType[]): { value: string }[] => {
  let array: { value: string }[] = [];
  arr.forEach((item) => {
    array = array.concat(getMenuName(item));
    if (item.children) {
      array = array.concat(loopMenuName(item.children));
    }
  });

  return array;
};

/**
 * 扁平化当前用户所拥有的菜单名称
 * API.MenuType[]->string[]
 */
export const getMenuNameFlat = (arr: API.MenuType[]): string[] => {
  let array: string[] = [];

  arr.forEach((item) => {
    array.push(item.name ?? '');
    if (item.children) {
      array = array.concat(getMenuNameFlat(item.children));
    }
  });

  return array;
};
