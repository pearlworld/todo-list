<template>
  <div class="list_item"
    @mouseenter="isTouchDevice ? '' : hover($event, item.id)"
    @mouseleave="isTouchDevice ? '' : focusOut"
    @touchstart="_touchStart"
    @touchend="_touchEnd($event, item.id)">
    <!-- 편집모드 시 -->
    <template v-if="edit">
      <div class="editmode">
        <input
          type="text"
          maxlength='17'
          class="edit--input"
          v-model="editing.content"
          @keypress.enter="updateText()"
        />
        <button 
          class="btn_edit" 
          @click="updateText()">
          수정
        </button>
      </div>
    </template>
    <!-- 기본값 -->
    <template v-else>
      <div class="item_left">
        <TodoCheckBox 
          :item="item"
          :checked="item.complete"
          @updateState="toggleComplete"
        ></TodoCheckBox>
        <div 
          class="item_content" 
          @mouseenter="isTouchDevice ? '' : hover($event, item.id)">
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
      isTouchDevice: false
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    // 포커스 이벤트
    hover(e,id) {
      this.currentId = id;
    },
    focusOut() {
      this.currentId = null;
    },
    // 터치 이벤트
    _touchStart(e) {
      this.prevPosX = e.changedTouches[0].clientX;
    },
    _touchEnd(e, id) {
      const posX = e.changedTouches[0].clientX;
      if (this.prevPosX > posX) {
        this.currentId = id;
      }
    },
    toggleComplete() {
      this.$emit('updateState', this.item.id, this.complete);
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
