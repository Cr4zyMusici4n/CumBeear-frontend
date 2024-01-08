<template>
  <nav class="sidebar">
    <nuxt-link v-for="(item, linkIdx) in links" :key="linkIdx" :to="item.link" class="link">
      <TheIcons :name="item.image" fill-inner class="icon" />
      {{ item.title }}
    </nuxt-link>
  </nav>
</template>

<script lang="ts" setup>
  const links = [
    {
      image: 'users',
      title: 'Пациенты',
      link: '#',
    },
    {
      image: 'book',
      title: 'Журнал пациента',
      link: '#',
    },
    {
      image: 'info',
      title: 'О нас',
      link: '#',
    },
  ]
</script>

<style lang="scss" scoped>
  .sidebar {
    background-color: #5b6ed2;

    .link {
      display: flex;
      gap: 16px;
      align-items: center;
      padding: 24px 32px;
      font-size: 24px;
      line-height: 1.4;
      color: #ffffff;

      .icon {
        flex-shrink: 0;
        width: 64px;
        height: 64px;
      }
    }
  }
</style>
