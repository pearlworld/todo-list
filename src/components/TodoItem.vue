<template>
  <div class="list_item"
    @mouseleave="focusOut">
    <!-- 편집모드 시 -->
    <template v-if="edit">
      <input
        type="text"
        v-model="editing.content"
        @keypress.enter="updateText()"
      />
      <button 
        class="btn-edit-done" 
        @click="updateText()">
        수정
      </button>
    </template>
    <!-- 기본값 -->
    <template v-else>
      <div class="item_left">
        <TodoCheckBox 
          :class="{ 'checked': item.complete }"
          :checked="item.complete"
          :item="item"
          @updateState="toggleComplete"
        ></TodoCheckBox>
        <div 
          class="item_content" 
          @mouseover="hover(item.id)">
          {{ item.content }}
        </div>
      </div>
      <div class="item_right">
        <div class="item_buttons">
          <button 
            class="btn_edit"
            @click="editItem(item)">
              edit button
          </button>
          <button 
            class="btn_delete"
            @click="removeItem(item.id)">
              close button</button>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import TodoCheckBox from '@/components/TodoCheckBox.vue'

export default {
  components: {
    'TodoCheckBox': TodoCheckBox
  },
  data() {
    return {
      prevPosX: 0,
      edit: false,
      editing: {},
      currentId: null,
    }
  },
  props: {
    item: Object,
  },
  methods: {
    hover(id) {
      this.currentId = id;
    },
    focusOut() {
      this.currentId = null;
    },
    toggleComplete() {
      if (this.item) {
        this.$emit('updateState', this.item.id);
      }
    },
    editItem(item) {
      this.editing = item;
      this.edit = true;
    },
    removeItem(id) {
      this.$emit("removeItem", id);
    },
    updateText() {
      this.$emit("updateItem", this.editing);
      this.currentId = null;
      this.editing = {};
      this.edit = false;
    },
  }
}
</script>
