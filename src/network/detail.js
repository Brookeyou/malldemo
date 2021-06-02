import {request} from 'network/requests'

export const detailData = (iid) => {
  return request ({
    url: '/detail',
    params: {
      iid
    }
  })
}

export class BaseGoodsInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = services
  }
}
