import {request} from 'network/requests'

export const multiData = () => {
  return request({
    url: 'home/multidata',
    method: 'get'
  })
}

export const homeData = (type, page) => {
  return request({
    url: 'home/data',
    params: {
      type,
      page
    }
  })
}
