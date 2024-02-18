<template>
  <div class="inner">
    <div class="content">
      <todoHeader
        :totalItems="totalItems"
        :checkedItems="checkedItems"
      ></todoHeader>
      <slot></slot>
    </div>
    <todoFooter></todoFooter>
  </div>
</template>

<script>
import MyHeader from './MyHeader.vue'
import MyFooter from './MyFooter.vue' 

export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  components: { 
    'todoHeader': MyHeader,
    'todoFooter': MyFooter
  },
  computed: {
    totalItems() {
      return this.items.length;
    },
    checkedItems() {
      return this.items.filter(item => item.complete).length;
    }
  }
}
</script>
