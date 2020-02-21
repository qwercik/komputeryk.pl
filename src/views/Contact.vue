<template>
  <div class="contact">
    <h1 class="title">Jak możesz się ze mną skontaktować?</h1>
    <ul class="contact-list">
      <li class="contact-entry">
        <a href="https://github.com/qwercik">
          <GithubIcon class="icon" />
          <div class="contact-url">
            qwercik
          </div>
        </a>
      </li>
      <li class="contact-entry">
        <a href="mailto:erykandrzejewski@gmail.com">
          <EmailIcon class="icon" />
          <div class="contact-url">
            erykandrzejewski@gmail.com
          </div>
        </a>
      </li>
      <li class="contact-entry">
        <a href="https://www.linkedin.com/in/eryk-andrzejewski-ba5ba218b">
          <LinkedinIcon class="icon" />
          <div class="contact-url">
            Eryk Andrzejewski
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import EmailIcon from '@/assets/icons/email.svg'
import GithubIcon from '@/assets/icons/github.svg'
import LinkedinIcon from '@/assets/icons/linkedin.svg'

export default {
  components: {
    EmailIcon,
    GithubIcon,
    LinkedinIcon
  }
}
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  text-align: center;
}

.icon {
  height: 50px;
  width: 50px;
  padding: 15px;
  fill: $mainFont;
}

.contact-list {
  list-style-type: none;
  padding: 0;
  width: 100%;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @include mq($until: tablet) {
    flex-direction: column;
  }
}

.contact-entry {
  flex: 1;

  & > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    color: inherit;
    text-decoration: none;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
