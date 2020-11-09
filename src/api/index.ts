import { request } from './request'

export function getDog () {
  return request({
    url: 'https://dog.ceo/api/breeds/image/random',
    method: 'get',
    params: {
      id: undefined
    }
  })
}
