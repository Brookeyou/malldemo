<template>
  <div v-if="Object.keys(itemParams).length !== 0" class="item-params">
    <div class="title">— {{itemParams.tableName}} —</div>
      <div v-for="(item, index) in itemParams.table[0]" :key="'table' + index" class="set">
        <div v-for="(col, index) in item" :key="index" :class="{'line-first': index === 0, 'set-item': index !== 0}">
          {{col}}
        </div>
      </div>
      <div class="disclaimer">{{itemParams.disclaimer}}</div>
    <div class="title">— {{itemParams.setName}} —</div>

    <div v-for="(item, index) in itemParams.set" :key="'set' + index" class="table">
      <div class="table-item-key">{{item.key}}</div>
      <div class="table-item">{{item.value}}</div>
    </div>

  </div>
</template>

<script>
export default {
  name:'itemParams',
  props: {
    itemParams: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {

        };
    },
  created() {

    },
  mounted() {

    },
  methods: {

    }
};
</script>

<style scoped>
.item-params {
  padding-bottom: 10px;
  border-bottom: 5px solid #f2f5f8;
}
.title {
  margin: 15px 0px 5px 0;
  text-align: center;
}
.set, .table {
  padding: 15px 10px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.set-item, .table-item {
  flex: 1;
  font-size: 13px;

}
.table-item {
  color: var(--color-tint);
  font-weight: bold;
}
.table-item-key, .line-first {
  width: 80px;
  font-size: 13px;
}
.disclaimer {
  font-size: 10px;
  margin: 5px 10px;
  border-bottom: 1px solid #eee;
}
</style>
