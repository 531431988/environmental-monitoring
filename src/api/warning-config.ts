import http from '@/utils'

// 查询告警配置
export const detail = params => http({
  url: '/monitor/admin/alarmConfig',
  method: 'GET',
  params
});

// 修改告警配置
export const edit = data => http({
  url: '/monitor/admin/alarmConfig',
  method: 'PUT',
  data
});
