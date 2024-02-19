<template>
  <base-layout :items="items">
    <TodoInput @add="addNewItem"></TodoInput>
    <div class="content">
      <p class="list_count">오늘 할 일 {{ totalItems }}개 중 {{ checkedItems }}개 완료 ! </p>
      <TodoList
        :items="items"
        @updateState="updateState"
        @updateItem="updateItem"
        @removeItem="removeItem"
      ></TodoList>
    </div>
    
    <div>
    </div>
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
    addNewItem(content) {
      this.items.push({ id: this.items.length, content });
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
      this.updateLocalStorage();
    },
    removeItem(id) {
      this.items = this.items.filter((item) => item.id !== id);
      this.updateLocalStorage();
    },
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