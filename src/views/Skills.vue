<template>
  <div class="skills">
    <h2 class="title">O tym, czym się zajmuję i z czego korzystam</h2>
    <ul class="skills-list">
      <li v-for="(skill, index) in skills" :key="index" class="skill">
        <h3 class="skill-title">
          {{ skill.name }}
        </h3>
        <div class="skill-description" v-html="skill.description" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      skills: [
        { name: 'Frontend', description: 'Tworząc strony internetowe, korzystam z&nbsp;frameworków: <strong>Vue</strong> oraz <strong>React</strong>.<br>Dbam o&nbsp;dostępność tworzonych przeze mnie stron. Zwracam uwagę na detale, aby strona prezentowała się profesjonalnie' },
        { name: 'Backend', description: 'Do tworzenia backendu stron internetowych, używam języków: <strong>PHP</strong> (<strong>Symfony</strong>) oraz <strong>JavaScript</strong> (<strong>Express</strong>). Stosuję również oprogramowanie <strong>Docker</strong> w&nbsp;celu wirtualizacji serwera na czas tworzenia aplikacji' },
        { name: 'Low-level', description: 'Interesuję się również programowaniem niskopoziomowym i&nbsp;systemowym. Korzystam z&nbsp;języków: <strong>C</strong> i <strong>C++</strong>, uczę się również języka <strong>Rust</strong>. Znam w&nbsp;podstawowym zakresie język asemblera dla architektury <strong>x86</strong>' },
        { name: 'Praca codzienna', description: 'Na co dzień posługuję się systemem <strong>Linux</strong> (głównie <strong>Debian</strong> oraz <strong>Mint</strong>), zarówno do użytku osobistego, jak i do podstawowej administracji własnym serwerem. Korzystam z języków <strong>Bash</strong> oraz <strong>Python</strong> do tworzenia skryptów automatyzujących codzienne zadania (czasem też nieco większych aplikacji)' }
      ]
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
  text-align: center;
}

.skills-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-align: center;

  display: flex;
  flex-wrap: wrap;
}

.skill {
  width: 25%;
  padding: 10px 50px;
  box-sizing: border-box;
  transition: background 0.5s;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }

  @include mq($until: desktop) {
    width: 50%;
  }

  @include mq($until: tablet) {
    width: 100%;
  }
}

</style>
