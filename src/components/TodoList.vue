<template>
  <div class="list_group">
    <TodoItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      @updateState="updateTodoState"
      @updateItem="updateTodoItem"
      @removeItem="removeTodoItem"
    ></TodoItem>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  name: 'TodoList',
  components: { TodoItem },
  props: {
    items: {
      type: Array,
    }
  },
  methods: {
    updateTodoState(id) {
      this.$emit("updateState", id);
    },
    updateTodoItem(item) {
      this.$emit("updateItem", item);
    },
    removeTodoItem(id) {
      this.$emit("removeItem", id);
    },
  }
}
</script>
