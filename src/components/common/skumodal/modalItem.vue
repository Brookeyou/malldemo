<template>
  <div class="modal-item" @click="Select">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'modalItem',
  data() {
    return {
        };
    },
  created() {

    },
  mounted() {

    },
  methods: {
    Select() {
      this.$emit('selectClick')
    }
    }
};
</script>

<style scoped>
.modal-item {
  /* width: 30vw; */
  padding: 2px 5px;
  border: 1px solid var(--color-tint);
  font-size: 10px;
  margin: 2px 5px;
  border-radius: 5px;
  line-height: 15px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
}
.active {
  background-color: var(--color-tint);
}
</style>
