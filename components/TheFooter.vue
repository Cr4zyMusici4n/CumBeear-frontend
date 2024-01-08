<template>
  <footer class="footer">
    <img src="@/assets/images/logo.png" class="image" />
    <div class="footer-content">
      <div class="footer-title">© 2023-2024 ЕБоСЗП</div>
      <div class="footer-address">426065 УР, г.Ижевск, Устиновский р-н</div>
      <div class="footer-phone">Тел: +7(000)000-00-00</div>
      <div class="footer-email">Email: cum_beear@***.ru</div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    display: flex;
    align-items: center;
    min-height: 80px;
    padding-left: 60px;
    background: #242a33;
  }

  .image {
    width: 60px;
  }

  .footer-content {
    display: flex;
    gap: 30px;
    justify-content: space-around;
    width: 100%;
    font-size: 15px;
    color: white;
  }
</style>
