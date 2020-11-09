
// 二次封装axios 所需的类型定义

export interface ApiUrl {
  [key: string]: string;
}

export interface ApiList {
  [key: string]: {
    [key: string]: string;
  };
}
export interface ParamData {
  url: string;
  method?: 'post' | 'get' | 'put' | 'delete';
  data?: any;
  params?: any;
}
