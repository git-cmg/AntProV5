// https://umijs.org/config/
import { defineConfig } from 'umi';
import { join } from 'path';

// import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  // Ant Pro自带的布局组件-layout在实际项目中无法完全满足需求，因而需要在@/src/layouts下自定义BaseLayout.tsx布局组件
  layout: {},
  // layout: {
  //   // https://umijs.org/zh-CN/plugins/plugin-layout
  //   locale: true,
  //   siderWidth: 208,
  //   ...defaultSettings,
  // },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  access: {},
  // 生产Html离线版本,思路：
  // 1、public下创建data.json文件，用于储存接口响应数据，数据格式可参考mock数据
  // 2、app.tsx中添加'异常处理程序'拦截器，拦截接口并返回data.json中数据。请求超时时间AXIOS_TIMEOUT设置为1
  // 3、publicPath需设置为'./'
  // publicPath: './',
  chainWebpack: (config) => {
    config.plugin('moment2dayjs').use('antd-dayjs-webpack-plugin');

    const staticDir = 'static';
    // 修改css输出目录
    config.plugin('extract-css').tap(() => [
      {
        filename: `${staticDir}/css/[name].[contenthash:8].css`,
        chunkFilename: `${staticDir}/css/[name].[contenthash:8].chunk.css`,
        ignoreOrder: true,
      },
    ]);

    // 修改js输出目录
    config.output
      .filename(`${staticDir}/js/[name].[hash:8].js`)
      .chunkFilename(`${staticDir}/js/[name].[contenthash:8].chunk.js`);
  },
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // 如果不想要 configProvide 动态设置主题需要把这个设置为 default
    // 只有设置为 variable， 才能使用 configProvide 动态设置主色调
    // https://ant.design/docs/react/customize-theme-variable-cn
    'root-entry-name': 'variable',
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  // Fast Refresh 热更新
  fastRefresh: {},
  openAPI: [
    {
      requestLibPath: "import { request } from 'umi'",
      // 或者使用在线的版本
      // schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json"
      schemaPath: join(__dirname, 'oneapi.json'),
      mock: false,
    },
    {
      requestLibPath: "import { request } from 'umi'",
      schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
      projectName: 'swagger',
    },
  ],
  nodeModulesTransform: { type: 'none' },
  mfsu: {},
  webpack5: {},
  exportStatic: {},
  // qiankun 微前端
  // 注意：主应用需要将document.ejs及global.less中的 #root -> #root-master,子应用不需要修改
  // qiankun: {
  //   // 二选一：主应用 master; 子应用 slave
  //   master:{},
  //   slave:{},
  // },
});
