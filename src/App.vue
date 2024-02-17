<template>
  <div id="WRAP">
    <TodoView></TodoView>
  </div>
</template>

<script>


import TodoView from './views/TodoView.vue';

export default {
  components: {
    'TodoView': TodoView
  }
}
</script>

<style>
  @import "https://cdn-css-file.css";
</style>
