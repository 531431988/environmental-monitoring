import http from '@/utils'

// 打开断路器
export const switchOn = () => http({
  url: '/monitor/admin/switchOn',
  method: "GET",
});


// 关闭断路器
export const switchOff = () => http({
  url: '/monitor/admin/switchOff',
  method: "GET",
});

// 解除报警
export const closeAlarm = code => http({
  url: `/monitor/device/closeAlarm/${code}`,
  method: "GET",
});

// 查询24小时上报信息
export const dailyQuery = id => http({
  url: `/monitor/device/dailyQuery/${id}`,
  method: "GET"
});

// 查询7天上报信息
export const weeklyQuery = id => http({
  url: `/monitor/device/weeklyQuery/${id}`,
  method: "GET"
});

// 查询30天上报信息
export const monthlyQuery = id => http({
  url: `/monitor/device/monthlyQuery/${id}`,
  method: "GET"
});

// 查询报警记录
export const alarmLog = (params = {}) => http({
  url: '/monitor/alarmLog',
  method: "GET",
  params
});


// 首页看板
export const dashboard = () => http({
  url: '/monitor/device/dashboard',
  method: "GET",
  loading: false
});
