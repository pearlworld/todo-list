<template>
  <div class="add_list">
    <input 
      type="text"
      maxlength='17'
      v-model="newItem" 
      @keyup.enter="addItem">
    <button
      type="button"
      class="btn_add"
      @click="addItem">추가</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: ""
    }
  },
  methods: {
    addItem() {
      if (this.newItem.trim() !== "") {
        localStorage.setItem(this.newItem, this.newItem);
        this.$emit('add', this.newItem);
        this.clearInput();
      } else {
        alert("할 일을 입력해주세요.")
      }
    },
    clearInput() {
      this.newItem = "";
    }
  }
}
</script>