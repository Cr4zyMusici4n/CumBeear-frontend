<template>
  <div class="auth-page">
    <TheInput v-model="input" label="text" />
    <TheButton label="Жми сюда" />
  </div>
</template>

<script lang="ts" setup>
  const input = ref('')
</script>

<style lang="scss" scoped>
  // .auth-page {
  // }
</style>
