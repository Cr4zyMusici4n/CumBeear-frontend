<template>
  <div class="header">
    <div class="text">Единая База о Состоянии Здоровья Пациента</div>
    <header></header>
    <img src="/img/logo.png" />
  </div>
</template>

<script></script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  img {
    z-index: 3;
  }
  header {
    height: 100px;
    background: url(img/logo.png) no-repeat;
    background: #1e3d6c;
    z-index: 1;
  }
  .text {
    color: black;
    position: absolute;
    font-size: 40px;
    left: 197px;
    z-index: 2;
  }
</style>
