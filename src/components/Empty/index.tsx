/**
 * 空状态
 * @author: cmg
 * @time: 2021-12-23 15:29:20
 */
import React from 'react';
import styles from './style.less';
import { ReactComponent as empty } from '@/icon/common/empty.svg';
import Icon from '@ant-design/icons';

const EmptyView: React.FC<{}> = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Icon component={empty} className={styles.empty} />
        <p className={styles.text}>暂无数据</p>
      </div>
    </>
  );
};

export default EmptyView;
