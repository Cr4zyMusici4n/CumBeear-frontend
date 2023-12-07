<template>
  <div class="test">
    <span>Computed: {{ computedVar }}</span> <br />
    <span>Number: {{ number }}</span> <br />
    <input v-model="variable" type="text" /> <br />
    <button @click="incrementNumber()">Increment number</button>
  </div>
</template>
<script lang="ts" setup>
  const variable = ref('')
  const number = ref(0)

  const computedVar = computed(() => {
    return `${variable.value} $`
  })

  const incrementNumber = () => {
    number.value++
  }
</script>
<style lang="scss" scoped>
  .test {
    margin: 0;
  }
</style>
