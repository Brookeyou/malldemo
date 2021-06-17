const formatDate = (date, fmt) => {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear().toString()).substr(4 - RegExp.$1));
  };

  let dateFmt = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };

  for (let key in dateFmt) {
    if (new RegExp(`(${key})`).test(fmt)) {
      let val = dateFmt[key] + '';
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1? val : padLeftZero(val))
    };
  };
  return fmt;
}

const padLeftZero = (val) => {
  return ('00' + val).substr(val.length);
};

const debounce = (func, time) => {
      let timer = null;
      return (...args) => {
        if (timer) {clearTimeout(timer)};
        timer = setTimeout(() => {
          // func.apply(this, args);
          func(...args);
        }, time);
      }
    }

const debounceV2 = (func, time) => {
      let timer = null;
      return (...args) => {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(function () {
          // console.log(this.$refs.scroll.refresh);
          // console.log(func);
          func(...args)
        }, time);
      }
    }

export {formatDate, debounce}
