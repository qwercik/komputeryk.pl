<template>
  <div id="app" class="app">
    <header class="header">
      <div class="site-title">
        <h1>komputeryk.pl</h1>
      </div>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
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
  grid-template-rows: 100px auto 50px;
  height: 100vh;
}

.header {
  background-color: cyan;
  grid-row: 1;
}

.main {
  grid-row: 2;
}

.footer {
  grid-row: 3;
  background-color: maroon;
}

</style>
