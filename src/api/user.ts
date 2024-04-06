import http from '@/utils'


// 登录
export const login = data => http({
  url: '/monitor/admin/login',
  method: 'POST',
  data
});

// 修改密码
export const resetPwd = data => http({
  url: '/monitor/admin/reset',
  method: 'POST',
  data
});
