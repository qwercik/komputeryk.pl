<template>
  <div class="gallery">
    <h1>Galeria moich fotografii</h1>
    <div class="slider">
      <button class="slider-button">&lt;</button>
      <img src="@/assets/images/background.jpg" class="slider-content">
      <button class="slider-button">&gt;</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  text-align: center;
}

.description {
  line-height: 1.5em;
}

.slider {
  display: flex;
  align-items: center;
  border: 1px solid red;
}

.slider-button {
  display: block;
  border: none;
  background: transparent;
  color: white;
  width: 50px;
  height: 100%;
  border: 1px solid green;
}

.slider-content {
  width: 500px;

  @include mq($until: tablet) {
    width: 100%;
  }
}

</style>
