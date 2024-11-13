import lodash from 'lodash';

/**
 * 将数据格式化成formData对象
 */
export const formatFromData = (data: Record<string, any>) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(key, lodash.get(data, key));
  });
  return formData;
};
