<template>
  <header id="HEADER">
    <h1 class="head_title">TODO</h1>
    <p class="head_today">{{ today }} <span class="head_week">{{ todayWeek }}</span></p>
  </header>
</template>

<script>
export default {
  data() {
    return {
      today: '',
      todayWeek: ''
    }
  },
  mounted() {
    this.getCurrentDate();
  },
  methods: {
    getCurrentDate() {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      const dayOfWeek = this.getWeekday(now.getDay());
      this.today = `${year}.${month}.${day}`;
      this.todayWeek = dayOfWeek;
    },
    getWeekday(dayIndex) {
      const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
      return `${weekdays[dayIndex]}요일`;
    }
  }
}
</script>