<template>
  <div class="the-input">
    <label class="label" @click="onFocus()">{{ label }}</label>

    <input ref="inputRef" v-model="valueProxy" type="text" :placeholder="placeholder ?? `Введите ${label}`" tabindex="0" class="input" />
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    modelValue: {
      type: String,
      required: true,
    },

    label: {
      type: String,
      required: true,
    },

    placeholder: {
      type: String,
      default: undefined,
    },
  })

  const emits = defineEmits<{
    (e: 'update:modelValue', $event: string): void
  }>()

  const valueProxy = computed({
    get() {
      return props.modelValue
    },
    set(value) {
      emits('update:modelValue', value)
    },
  })

  const inputRef = ref<HTMLInputElement>()

  const onFocus = () => {
    if (!inputRef.value) return

    inputRef.value.focus()
  }
</script>

<style lang="scss" scoped>
  .the-input {
    .label {
      display: block;
      margin-bottom: 12px;
      font-size: 24px;
      color: #333333;
    }

    .input {
      width: 100%;
      height: 46px;
      padding: 0 16px;
      font-size: 16px;
      border: 1px solid $c-blue;
      border-radius: $radius-md;
      outline: none;
      transition:
        border-color 0.2s ease-in-out,
        background-color 0.2s ease-in-out;

      &:focus {
        background-color: $c-bg-accent;
        border-color: $c-blue-accent;
      }
    }
  }
</style>
