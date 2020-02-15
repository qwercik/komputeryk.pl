<template>
  <header class="header">
     <div class="site-title">
        <h1><router-link to="/">komputeryk.pl</router-link></h1>
      </div>
      <nav class="nav">
        <ol>
          <li><router-link to="/about">O mnie</router-link></li>
          <li><router-link to="/about">Projekty</router-link></li>
          <li><router-link to="/about">Galeria</router-link></li>
          <li><router-link to="/about">Cośtam</router-link></li>
          <li><router-link to="/about">Kontakt</router-link></li>
        </ol>
      </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  grid-row: 1;

  display: flex;
  padding: 20px;
}

.site-title {
  flex: 1;
  margin-left: 50px;

  & > h1 {
    margin: 0;

    & > a {
      color: inherit;
      text-decoration: none;

      transition-duration: 0.5s;

      &:hover {
        color: white;
        text-decoration: underline;
      }
    }
  }
}

.nav {
  flex: 1;

  & > ol {
    margin: 0;
    list-style-type: none;
    display: flex;

    & > li {
      padding: 10px 20px;
      margin: 0 10px;

      & > a {
        color: inherit;
        text-decoration: none;

        transition-duration: 0.2s;

        &:hover {
          color: white;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
