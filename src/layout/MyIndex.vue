<template>
  <div class="inner">
    <div class="background"></div>
    <todoHeader></todoHeader>
      <slot></slot>
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

}
</script>
