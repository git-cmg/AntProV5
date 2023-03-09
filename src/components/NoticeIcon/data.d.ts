type NoticeIconItemType = 'notification' | 'message' | 'event';

export interface NoticeIconItem {
  id?: string;
  extra?: string;
  key?: string;
  read?: boolean;
  avatar?: string;
  title?: string;
  status?: string;
  datetime?: string;
  description?: string;
  type?: NoticeIconItemType;
}

export interface NoticeIconList {
  data?: NoticeIconItem[];
  /** 列表的内容总数 */
  total?: number;
  success?: boolean;
}
