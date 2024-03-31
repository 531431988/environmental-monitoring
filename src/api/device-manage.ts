import http from '@/utils/axios';

// 查询设备信息
export const deviceSearch = params => http({
  url: '/monitor/device',
  method: "get",
  params
});

// 保存设备信息
export const deviceSave = data => http({
  url: '/monitor/device',
  method: "post",
  data
});

// 更新设备信息
export const deviceUpdate = data => http.put({
  url: '/monitor/device',
  method: "put",
  data
});

// 删除设备信息
export const deviceDel = code => http.put({
  url: `/monitor/${code}`,
  method: "delete",
});

