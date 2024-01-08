<template>
  <div class="layout">
    <TheHeader />
    <div class="content">
      <TheSidebar class="sidebar" />
      <main class="main">
        <slot />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .content {
      display: flex;
      flex-grow: 1;
    }

    .main {
      flex-grow: 1;
    }

    .sidebar {
      flex-shrink: 0;
      width: 280px;
    }
  }
</style>
