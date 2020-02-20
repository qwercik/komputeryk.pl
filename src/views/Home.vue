<template>
  <div class="view">
    <router-link to="/o-mnie">
      <img src="@/assets/images/eryk.jpg" alt="" class="portrait">
    </router-link>
    <div class="about">
      <h2 class="title">Eryk Andrzejewski</h2>
      <p>Student informatyki i programista pasjonat</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.view {
  display: flex;
  align-items: center;

  @include mq($until: tablet) {
    flex-direction: column;
  }
}

.portrait {
  border-radius: 50%;
  width: 200px;
  opacity: 0.8;
  transition-duration: 0.5s;

  @include mq($until: tablet) {
    width: 180px;
  }

  &:hover {
    opacity: 1;
  }
}

.about {
  padding: 50px;
  text-align: center;

  @include mq($until: tablet) {
    padding: 30px;
  }
}

.title {
  font-size: 2rem;
  margin: 0;
  padding: 0;

  @include mq($until: tablet) {
    font-size: 1.8rem;
  }
}
</style>
