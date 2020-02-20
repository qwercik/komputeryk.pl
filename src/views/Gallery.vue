<template>
  <div class="gallery">
    <h1>Galeria moich fotografii</h1>
    <div class="slider">
      <button class="slider-button" @click="previousPicture">
        <LeftIcon class="icon" />
      </button>

      <img
        :src="require(`@/assets/images/gallery/${currentPicture.filename}`)"
        :alt="currentPicture.name"
        class="slider-content"
      >

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
      console.log(this.currentPictureIndex)
      return this.pictures[this.currentPictureIndex]
    }
  },
  data () {
    return {
      pictures: [
        { name: 'Bieszczady', filename: 'bieszczady.jpg' },
        { name: 'Droga', filename: 'droga.jpg' },
        { name: 'Krzyż (2)', filename: 'krzyż-2.jpg' }
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

.description {
  line-height: 1.5em;
}

.slider {
  display: flex;
  align-items: stretch;
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
    }
  }
}

.slider-content {
  width: 500px;

  @include mq($until: tablet) {
    width: 100%;
  }
}

.icon {
  width: 20px;
  height: auto;
  fill: $mainFont;
}

</style>
