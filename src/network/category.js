import {request} from './requests'

const category = () => {
  return request({
    url: 'category'
  })
}

const subCategory = (maitKey) => {
  return request({
    url: 'subcategory',
    params: {
      maitKey
    }
  })
}




export {
  category,
  subCategory
}
