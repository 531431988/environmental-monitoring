import http from '@/utils/axios';

// 打开断路器
export const switchOn = params => http({
  url: '/monitor/admin/switchOn',
  method: "get",
  params
});


// 关闭断路器
export const switchOff = params => http({
  url: '/monitor/admin/switchOff',
  method: "get",
  params
});


// 查询24小时上报信息
export const dailyQuery = id => http({
  url: `/monitor/device/dailyQuery/${id}`,
  method: "get"
});

// 查询7天上报信息
export const weeklyQuery = id => http({
  url: `/monitor/device/weeklyQuery/${id}`,
  method: "get"
});

// 查询30天上报信息
export const monthlyQuery = id => http({
  url: `/monitor/device/monthlyQuery/${id}`,
  method: "get"
});
