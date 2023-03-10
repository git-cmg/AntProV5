/**
 * Ant design Table props
 */
import { useState } from 'react';
import type { TableProps } from 'antd';

export default function useTablePropsModel() {
  const [pagination] = useState<TableProps<any>['pagination']>({
    defaultPageSize: 10,
  });

  return {
    pagination,
  };
}
