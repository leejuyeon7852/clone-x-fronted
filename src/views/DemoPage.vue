<template>
  <div>
    <p>현재 점수: {{ score }}</p>
    <div v-if="score >= 90">학점: A</div>
    <div v-else-if="score >= 80">학점: B</div>
    <div v-else-if="score >= 70">학점: C</div>
    <div v-else-if="score >= 60">학점: D</div>
    <div v-else>학점: F</div>
  </div>
</template>

<script>
export default {
    name: "DemoPage",
    data() {
      return {
        score: 85,
      };
    },    
};
</script>

<style>

</style>