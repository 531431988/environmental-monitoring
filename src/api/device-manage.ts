import http from '@/utils'


// 查询设备信息
export const list = params => http({
  url: '/monitor/device',
  method: "GET",
  params
});

// 保存设备信息
export const add = data => http({
  url: '/monitor/device',
  method: "POST",
  data
});

// 更新设备信息
export const edit = data => http({
  url: '/monitor/device',
  method: "PUT",
  data
});

// 删除设备信息
export const del = code => http({
  url: `/monitor/device/${code}`,
  method: "DELETE",
});


// 查询设备信息
export const detail = code => http({
  url: `/monitor/device/${code}`,
  method: "GET"
});

// 获取站点
export const getCodes = () => http({
  url: `/monitor/device/getCodes`,
  method: "GET"
});
