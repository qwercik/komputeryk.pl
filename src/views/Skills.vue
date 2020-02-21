<template>
  <div class="skills">
    <h2 class="title">O tym, czym się zajmuję i z czego korzystam</h2>
    <ul class="skills-list">
      <li v-for="(skill, index) in skills" :key="index" class="skill">
        {{ skill }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      skills: ['HTML', 'CSS', 'JavaScript', 'Vue', 'React', 'PHP', 'MySQL', 'Symfony', 'Linux', 'Git', 'Docker', 'C', 'C++', 'Rust', 'Python', 'Bash']
    }
  }
}
</script>

<style lang="scss" scoped>
.skills {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 2em;
}

.skills-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-align: center;
  width: 80%;

  display: flex;
  flex-wrap: wrap;
}

.skill {
  width: 25%;
  padding: 40px;
  box-sizing: border-box;
  transition: background 0.5s;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
}

</style>
