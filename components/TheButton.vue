<template>
  <button type="button" class="the-button" :class="buttonClasses" @click="handleClick($event.target)">{{ label }}</button>
</template>

<script lang="ts" setup>
  import { ButtonType } from '@/types/kit'

  const props = defineProps({
    label: {
      type: String,
      required: true,
    },

    type: {
      type: String as PropType<ButtonType>,
      default: ButtonType.PRIMARY,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    fill: {
      type: Boolean,
      default: false,
    },
  })

  const emits = defineEmits<{
    (e: 'click', $event: EventTarget | null): void
  }>()

  const buttonClasses = computed(() => {
    return [{ 'is-disabled': props.disabled }, { 'is-fill': props.fill }, `is-${props.type.toLocaleLowerCase()}`]
  })

  const handleClick = (e: EventTarget | null) => {
    if (props.disabled) return
    emits('click', e)
  }
</script>

<style lang="scss" scoped>
  .the-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    padding: 0 16px;
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    background-color: $c-blue-accent;
    border: none;
    border-radius: $radius-md;
    outline: none;
    transition: background-color 0.2s ease-in-out;

    &:not(.is-disabled):hover,
    &:not(.is-disabled):active {
      background-color: $c-blue;
    }

    &.is-disabled {
      cursor: not-allowed;
      background-color: #7d7d7d;
    }

    &.is-fill {
      width: 100%;
    }
  }
</style>
