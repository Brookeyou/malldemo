import {debounce} from "common/utils";


export const imageLoadListener = {
  data(){
    return {
      imageLoadListenerfunc: null
    }
  },
  mounted() {
     // this.$refs.scroll.refresh在赋值进方法时已经解析找到了相关的方法
    const refresh = debounce(this.$refs.scroll.refresh, 1000);
    this.imageLoadListenerfunc = () => {refresh();}
    this.$bus.$on('imageLoad', this.imageLoadListenerfunc);
  },
}
