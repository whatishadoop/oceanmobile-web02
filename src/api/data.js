import request from '@/utils/request'

/**
 *
 * @param url
 * @param params `params`是要与请求一起发送的URL参数
 */
export function initData(url, params) {
  return request({
    url: url,
    method: 'get',
    params
  })
}
