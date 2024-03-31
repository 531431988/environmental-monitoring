import http from '@/utils/axios';
// 查询告警配置
export const detail = data => http({
  url: '/monitor/admin/alarmConfig',
  method: 'GET',
  data
});

// 修改告警配置
export const edit = data => http({
  url: '/monitor/admin/alarmConfig',
  method: 'PUT',
  data
});
