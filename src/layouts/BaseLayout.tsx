/**
 * 自定义布局
 */
import RightContent from '@/components/RightContent';
import type { BasicLayoutProps } from '@ant-design/pro-components';
import ProLayout from '@ant-design/pro-layout';
import React from 'react';
import { history, Link, useModel } from 'umi';
import { loopMenuItem } from '@/utils/formatMenuData';
import { BackTop, ConfigProvider } from 'antd';
import EmptyView from '@/components/Empty';
import Footer from '@/components/Footer';
import { BookOutlined, LinkOutlined } from '@ant-design/icons';

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const { children } = props;
  const { initialState } = useModel('@@initialState');

  return (
    <>
      <ConfigProvider renderEmpty={() => <EmptyView />}>
        <BackTop />
        <ProLayout
          rightContentRender={() => <RightContent />}
          disableMobile
          footerRender={() => <Footer />}
          onPageChange={() => {
            const { location } = history;
            // 如果没有登录，重定向到 login
            if (!initialState?.currentUser && location.pathname !== loginPath) {
              history.push(loginPath);
            }
          }}
          links={
            isDev
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
              : []
          }
          menuItemRender={(menuItemProps, defaultDom) => {
            if (menuItemProps.isUrl || !menuItemProps.path) {
              return defaultDom;
            }
            // 支持二级菜单显示icon
            // https://github.com/ant-design/ant-design-pro/issues/7765
            return (
              <Link to={menuItemProps.path}>
                {menuItemProps.pro_layout_parentKeys &&
                  menuItemProps.pro_layout_parentKeys.length > 0 &&
                  menuItemProps.icon}
                {defaultDom}
              </Link>
            );
          }}
          itemRender={(route) => {
            return <span>{route.breadcrumbName}</span>;
          }}
          menuDataRender={(menuData) =>
            initialState ? loopMenuItem(initialState?.menuData ?? []) : menuData
          }
          {...props}
          {...initialState?.settings}
          breakpoint={false}
        >
          {children}
        </ProLayout>
      </ConfigProvider>
    </>
  );
};

export default BasicLayout;
