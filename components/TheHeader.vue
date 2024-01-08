<template>
  <header class="header">
    <nuxt-link to="/" class="logo">
      <img src="@/assets/images/logo.png" class="image" />
      <div class="text">Единая База о Состоянии Здоровья Пациента</div>
    </nuxt-link>
    <nuxt-link to="#" class="link">Профиль</nuxt-link>
  </header>
</template>

<script></script>

<style lang="scss" scoped>
  .header {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    min-height: 100px;
    padding: 0 40px;
    background: $c-blue;
  }

  .logo {
    display: flex;
    gap: 24px;
    align-items: center;
  }

  .image {
    width: 80px;
  }

  .text {
    font-size: 40px;
    color: white;
  }

  .link {
    margin: 0 0 0 auto;
    font-size: 20px;
    color: white;
  }
</style>
