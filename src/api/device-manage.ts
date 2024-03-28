import { defHttp } from '@/utils/http/axios';

// 查询设备信息
export const deviceSave = params => defHttp.get({ url: '/monitor/device', params });

// 保存设备信息
export const deviceSave = data => defHttp.post({ url: '/monitor/device', data });

// 更新设备信息
export const deviceUpdate = data => defHttp.put({ url: '/monitor/device', data });

