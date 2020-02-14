<template>
  <div id="app" class="app">
    <header class="header">
      <div class="site-title">
        <h1><router-link to="/">komputeryk.pl</router-link></h1>
      </div>
      <nav class="nav">
        <ol>
          <li><router-link to="/">Strona główna</router-link></li>
          <li><router-link to="/about">O mnie</router-link></li>
          <li><router-link to="/about">Projekty</router-link></li>
          <li><router-link to="/about">Galeria</router-link></li>
          <li><router-link to="/about">Kontakt</router-link></li>
        </ol>
      </nav>
    </header>
    <main class="main">
      <router-view/>
    </main>
    <footer class="footer">
      Eryk Andrzejewski 2020
    </footer>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  color: #2c3e50;
}

.app {
  display: grid;
  grid-template-rows: 80px 1fr;
  height: 100vh;
}

.header {
  background-color: cyan;
  grid-row: 1;

  display: flex;
  padding: 20px;
}

.site-title {
  flex: 1;
  margin-left: 50px;

  & > h1 {
    margin: 0;
  }
}

.nav {
  flex: 1;

  & > ol {
    margin: 0;
    list-style-type: none;
    display: flex;

    & > li {
      border: 1px solid red;
      padding: 10px 20px;
      margin: 0 10px;
    }
  }
}

.main {
  grid-row: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer {
  grid-row: 3;
  text-align: center;
  padding: 10px;
  background-color: maroon;
}

</style>
