<template>
  <div class="kit-icon" :class="{ 'is-fill': fill, 'is-fill-inner': fillInner }" v-html="icon" />
</template>

<script setup lang="ts">
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    fill: {
      type: Boolean,
      default: false,
    },
    fillInner: {
      type: Boolean,
      default: false,
    },
  })
  const icon = ref<any>('')

  const loadIcon = async () => {
    const iconsImport = import.meta.glob('assets/images/icons/**/**.svg', { as: 'raw', eager: false })
    if (!(`/assets/images/icons/${props.name}.svg` in iconsImport)) throw showError(`Icon ${props.name} not existed`)
    const rawIcon = await iconsImport[`/assets/images/icons/${props.name}.svg`]()
    icon.value = rawIcon
  }

  await loadIcon()

  watch(
    () => props.name,
    () => loadIcon(),
  )
</script>

<style lang="scss">
  .kit-icon {
    display: inline-flex;

    &.is-fill {
      width: 100%;
      height: 100%;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &.is-fill-inner {
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
