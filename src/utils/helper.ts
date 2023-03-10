import _ from 'lodash';

/**
 * 将数据格式化成formData对象
 */
export const formatFromData = (data: Record<string, any>) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(key, _.get(data, key));
  });
  return formData;
};

/**
 * 判空
 */
export const isNull = (data: any): boolean => _.size(data) === 0;

/**
 * 计算文件大小
 */
export const byte2size = (bytes: number) => {
  if (bytes === 0) return '0 B';
  const k = 1024, //or 1000
    sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));

  // 精度调整
  const precision = bytes / Math.pow(k, i) > 1000 ? 4 : 3;

  return (bytes / Math.pow(k, i)).toPrecision(precision) + ' ' + sizes[i];
};
