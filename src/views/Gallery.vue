<template>
  <div class="gallery">
    <h1>Galeria moich fotografii</h1>
    <div class="slider">
      <button class="slider-button" @click="previousPicture">
        <LeftIcon class="icon" />
      </button>

      <a :href="require(`@/assets/images/gallery/${currentPicture.filename}`)" class="show-full-resolution-link">
        <div class="slider-content">
          <transition name="picture-change" mode="out-in">
              <img
                :src="require(`@/assets/images/gallery/${currentPicture.filename}`)"
                :key="currentPicture.filename"
                :alt="currentPicture.name"
                class="slider-content"
              >
          </transition>
          <div class="description">
            <h3>{{ currentPicture.name }}</h3>
            <div class="notice">
              Kliknij na zdjęcie, aby zobaczyć je&nbsp;w pełnej rozdzielczości
            </div>
          </div>
        </div>
      </a>

      <button class="slider-button" @click="nextPicture">
        <RightIcon class="icon" />
      </button>
    </div>
  </div>
</template>

<script>
import LeftIcon from '@/assets/icons/left.svg'
import RightIcon from '@/assets/icons/right.svg'

export default {
  components: {
    LeftIcon,
    RightIcon
  },
  computed: {
    currentPicture () {
      return this.pictures[this.currentPictureIndex]
    }
  },
  data () {
    return {
      pictures: [
        { name: 'Bieszczady', filename: 'bieszczady.jpg' },
        { name: 'Droga', filename: 'droga.jpg' },
        { name: 'Krzyż', filename: 'krzyz-2.jpg' }
      ],
      currentPictureIndex: 0
    }
  },
  methods: {
    nextPicture () {
      this.currentPictureIndex++
      this.currentPictureIndex %= this.pictures.length
    },
    previousPicture () {
      this.currentPictureIndex--
      this.currentPictureIndex += this.pictures.length
      this.currentPictureIndex %= this.pictures.length
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery {
  text-align: center;
}

.slider {
  display: flex;
  align-items: stretch;
  justify-content: center;
}

.slider-button {
  padding: 0;
  display: block;
  border: none;
  background: transparent;
  color: white;
  width: 50px;

  transition: background 0.5s;
  &:hover {
    background: rgba(0, 0, 0, 0.3);

    .icon {
      fill: $highlight;
      opacity: 1;
    }
  }
}

.show-full-resolution-link {
  color: inherit;
  text-decoration: none;
}

.slider-content {
  max-height: 60vh;
  max-width: 100%;
  position: relative;

  &:hover .description {
    opacity: 1;
  }
}

.description {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s;
  background: rgba(0, 0, 0, 0.7);
  box-sizing: border-box;
  padding: 20px;
  opacity: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.icon {
  width: 20px;
  height: auto;
  fill: $mainFont;
  opacity: 0.4;
  transition: opacity 0.5s;
}

.picture-change-enter-active,
.picture-change-leave-active {
  transition: opacity 0.5s;
}

.picture-change-enter,
.picture-change-leave-to {
  opacity: 0;
}

</style>
