import {request} from 'network/requests'

const handlerTable = Symbol('handlerTable');

export const detailData = (iid) => {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export const recommendData = () => {
  return request({
    url: '/recommend'
  })
}

export class BaseGoodsInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.price = itemInfo.lowPrice;
    this.oldPrice = itemInfo.highPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = services
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.shopName = shopInfo.name;
    this.totalSell = shopInfo.cSells;
    this.totalGoods = shopInfo.cGoods;
    this.score = shopInfo.score;
    this.shopUrl = shopInfo.shopUrl
  }
}

export class ItemParams {
  constructor(itemParams) {
    this.itemParams = itemParams;
    this.set = itemParams.info.set;
    this.setName = itemParams.info.key;
    this.table = this[handlerTable]();
    this.tableName = itemParams.rule.key;
    this.disclaimer = itemParams.rule.disclaimer;
  };
  [handlerTable]() {
    let tables = this.itemParams.rule.tables;
    if (tables.length > 1) {
      for (let i = 1; i <= tables.length -1; i++) {
        for (let j = 0; j <= tables[i].length - 1; j++) {
          tables[i][j].shift();
          tables[0][j].push(...tables[i][j]);
        }
      }
    }
    tables.splice(1, tables.length - 1);
    return tables
  }
}
