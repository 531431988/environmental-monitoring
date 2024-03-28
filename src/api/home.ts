import { defHttp } from '@/utils/http/axios';

// 打开断路器
export const switchOn = params => defHttp.get({ url: '/monitor/admin/switchOn', params });


// 关闭断路器
export const switchOff = params => defHttp.get({ url: '/monitor/admin/switchOff', params });


