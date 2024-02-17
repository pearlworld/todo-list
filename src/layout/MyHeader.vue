<template>
  <header id="HEADER">
    <h2 class="head_today">{{ today }}</h2>
    <p class="head_week">{{ todayWeek }}</p>
    <span class="head_count">잔여 리스트 개수</span>
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

<style scoped>
.head_today {
  color: #4c4c4c;
  font-weight: 900;
}
.head_week {
  margin-top: 7px;
  font-size: 16px;
  color: #676767;
}
</style>