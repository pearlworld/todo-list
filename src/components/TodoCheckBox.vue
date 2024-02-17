<template>
  <div class="item_checkbox">
    <input 
      type="checkbox"
      class="checkbox"
      :id="'checkbox_' + (item.id || uniqueId)"
      :value="item.id"
      v-model="isChecked" 
      @change="updateState">
    <label :for="'checkbox_' + (item.id || uniqueId)"><span></span></label>
  </div>
</template>

<script>
export default {
  name: 'TodoCheckButton',
  props: {
    checked: Boolean,
    item: Object,
  },
  data() {
    return {
      isChecked: this.checked || false,
      uniqueId: Math.random().toString(36).substr(2, 9)
    }
  },
  methods: {
    updateState() {
      this.$emit("updateState", this.item.id);  // 상태 업데이트 이벤트 발생
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      const storageKey = 'todoItems';
      let items = JSON.parse(localStorage.getItem(storageKey)) || {};
      items[this.item.id] = this.isChecked;
      localStorage.setItem(storageKey, JSON.stringify(items));
    }
  }
}
</script>

<style scoped>
.checkbox {
  display: none;
}
.checkbox + label {
  cursor: pointer;
}
.checkbox + label > span {
  vertical-align: middle;
}
.checkbox + label::before {
  content:"";
  display:inline-block;
  width: 20px;
  height: 20px;
  border:2px solid #333;
  border-radius: 4px;
  vertical-align:middle;
}
.checkbox:checked + label::before {
  content:"";
  width: 20px;
  height: 20px;
  background-color:#333;
  border-color:#333;
  background-image: url(../assets/images/ico_checked.png);
  background-size: 16px;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>