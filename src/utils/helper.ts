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
