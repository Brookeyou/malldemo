import {request} from 'network/requests'

export const multiData = () => {
  return request({
    url: 'home/multidata',
    method: 'get'
  })
}
