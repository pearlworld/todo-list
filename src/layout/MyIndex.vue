<template>
  <div class="inner">
    <div class="content">
      <todo-header></todo-header>
      <slot></slot>
    </div>
    
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import MyHeader from './MyHeader.vue'
import MyFooter from './MyFooter.vue' 

export default {
  components: { 
    'TodoHeader': MyHeader,
    'TodoFooter': MyFooter
  }
}
</script>