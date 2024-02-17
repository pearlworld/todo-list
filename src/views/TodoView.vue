<template>
  <base-layout>
    <TodoInput @add="addItem"></TodoInput>
    <TodoList
      :items="items"
      @updateState="updateState"
      @updateItem="updateItem"
      @removeItem="removeItem"
    ></TodoList>
  </base-layout>
</template>

<script>
import BaseLayout from "@/layout/MyIndex.vue"
import TodoInput from '@/components/TodoInput.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  components: {
    'base-layout': BaseLayout,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
  },
  data() {
    return {
      items: []
    }
  },
  mounted() {
    this.loadItemsFromLocalStorage();
  },
  methods: {
    addItem(newItem) {
      this.items.push({
        content: newItem,
        complete: false
      });
      this.updateLocalStorage();
    },
    loadItemsFromLocalStorage() {
      const storedItems = localStorage.getItem('items');
      if (storedItems) {
        this.items = JSON.parse(storedItems);
      }
    },
    updateLocalStorage() {
      localStorage.setItem('items', JSON.stringify(this.items));
    },
    updateState(id) {
      const target = this.items.find((item) => item.id === id);
      if (target) {
        target.complete = !target.complete;
        this.updateLocalStorage();
      }
    },
    updateItem({ id, content }) {
      const index = this.items.findIndex((item) => item.id === id);
      if (index) {
        this.items[index].content = content;
      }
    },
    removeItem(id) {
      this.items = this.items.filter((item) => item.id !== id);
    },
  }
}
</script>