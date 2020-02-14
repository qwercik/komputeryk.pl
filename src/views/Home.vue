<template>
  <div class="view">
    <a href="/">
      <img src="../assets/eryk.jpg" alt="" class="portrait">
    </a>
    <div class="about">
      <h2 class="title">Eryk Andrzejewski</h2>
      <p>Debil, idiota, nieuk.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.view {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.portrait {
  border-radius: 50%;
  width: 200px;
  opacity: 0.8;
  transition-duration: 0.5s;

  &:hover {
    opacity: 1;
  }
}

.about {
  padding: 50px;
  text-align: center;
}

.title {
  font-size: 2rem;
  margin: 0;
  padding: 0;
}
</style>
