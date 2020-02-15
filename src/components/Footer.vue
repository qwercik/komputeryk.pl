<template>
  <footer class="footer">
    Eryk Andrzejewski {{ yearsRange }}
  </footer>
</template>

<script>
export default {
  data () {
    const startingYear = 2020
    const currentYear = (new Date()).getFullYear()

    let yearsRange = startingYear
    if (startingYear !== currentYear) {
      yearsRange = `${startingYear}-${currentYear}`
    }

    return {
      yearsRange
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  grid-row: 3;
  text-align: center;
  padding: 20px;
}
</style>
