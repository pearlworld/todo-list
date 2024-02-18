<template>
  <div class="item_checkbox">
    <input 
      type="checkbox"
      class="checkbox"
      :id="'checkbox_' + (item.id || uniqueId)"
      :value="item.id"
      @change="updateState(item.id)">
    <label :for="'checkbox_' + (item.id || uniqueId)"><span></span></label>
  </div>
</template>

<script>
export default {
  name: 'TodoCheckButton',
  props: {
    item: Object,
  },
  data() {
    return {
      uniqueId: Math.random().toString(36).substr(2, 9)
    }
  },
  methods: {
    updateState(id) {
      this.$emit("updateState", id);
    },
  }
}
</script>
