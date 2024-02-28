import Footer from '@/components/Footer';
import RightContent from '@/components/RightContent';
import { BookOutlined, LinkOutlined } from '@ant-design/icons';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { PageLoading, SettingDrawer } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig, RequestConfig } from 'umi';
import { history, Link } from 'umi';
import defaultSettings from '../config/defaultSettings';
import { queryCurrentUser, queryMenuData } from '@/services/user';
import type { API } from '@/services/API';
import { API_KEY, getToken } from '@/utils/auth';

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';
const { AXIOS_TIMEOUT, ApiUrl } = window.g;

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  menuData?: API.MenuType[];
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
  fetchMenuData?: () => Promise<API.MenuType[] | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const msg = await queryCurrentUser();
      return msg.data;
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };
  const fetchMenuData = async () => {
    try {
      const msg = await queryMenuData();
      return msg.data;
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };
  // 如果不是登录页面，执行
  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    const menuData = await fetchMenuData();
    return {
      fetchUserInfo,
      fetchMenuData,
      menuData,
      currentUser,
      settings: defaultSettings,
    };
  }
  return {
    fetchUserInfo,
    fetchMenuData,
    settings: defaultSettings,
  };
}

// 动态配置qiankun，注册子应用。另外，还可以在config.ts中qiankun.master进行静态配置
// 从接口中获取子应用配置，export 出的 qiankun 变量是一个 promise
/*export const qiankun = fetch('/config').then(({ apps }) => ({
  // 注册子应用信息
  apps,
  // 完整生命周期钩子请看 https://qiankun.umijs.org/zh/api/#registermicroapps-apps-lifecycles
  lifeCycles: {},
  // 启用沙箱的实验性样式隔离特性
  sandbox: { experimentalStyleIsolation:true },
  // 支持更多的其他配置，详细看这里 https://qiankun.umijs.org/zh/api/#start-opts
}));*/

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    waterMarkProps: {
      content: initialState?.currentUser?.user_name,
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    links: isDev
      ? [
          <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
          <Link to="/~docs" key="docs">
            <BookOutlined />
            <span>业务组件文档</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children, props) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          {!props.location?.pathname?.includes('/login') && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
    ...initialState?.settings,
  };
};

export const request: RequestConfig = {
  prefix: isDev ? '' : ApiUrl,
  timeout: AXIOS_TIMEOUT,
  // 请求拦截器，接收一个数组（可以有多个拦截器）
  requestInterceptors: [
    (url, options) => {
      const token = getToken();
      const op = options;
      // 设置token
      if (token) {
        op.headers = {
          ...options.headers,
          [API_KEY]: token,
        };
      }
      return {
        url,
        options: op,
      };
    },
  ],
  // 接口数据转换格式
  errorConfig: {
    adaptor: (resData) => {
      return {
        ...resData,
      };
    },
  },
};
