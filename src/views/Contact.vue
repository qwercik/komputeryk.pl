<template>
  <div class="contact">
    <h1>Jak możesz się ze mną skontaktować?</h1>
    <ul class="contact-list">
      <li class="contact-entry">
        <EmailIcon class="icon" />
        <span class="contact-url">
          erykandrzejewski@gmail.com
        </span>
      </li>
      <li class="contact-entry">
        <GithubIcon class="icon" />
        <span class="contact-url">
          qwercik
        </span>
      </li>
      <li class="contact-entry">
        <LinkedinIcon class="icon" />
        <span class="contact-url">
          Eryk Andrzejewski
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import EmailIcon from '@/assets/images/email.svg'
import GithubIcon from '@/assets/images/github.svg'
import LinkedinIcon from '@/assets/images/linkedin.svg'

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
  text-align: center;
}

.icon {
  height: 50px;
  width: 50px;
  padding: 0 20px;
}

.contact-list {
  list-style-type: none;
  margin: 0 auto;
}

.contact-entry {
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}
</style>
