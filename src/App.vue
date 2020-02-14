<template>
  <div id="app" class="app">
    <header class="header">
      <div class="site-title">
        <h1>komputeryk.pl</h1>
      </div>
      <nav class="nav">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
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
  grid-template-rows: 100px auto 50px;
  height: 100vh;
}

.header {
  background-color: cyan;
  grid-row: 1;

  display: flex;
  padding: 20px;
}

.site-title {
  flex: 4;
  margin-left: 50px;

  & > h1 {
    margin: 0;
  }
}

.nav {
  flex: 3;

  & > ol {
    margin: 0;
    list-style-type: none;
    display: flex;

    & > li {
      border: 1px solid red;
      padding: 10px;
      margin: 0 10px;
    }
  }
}

.main {
  grid-row: 2;
}

.footer {
  grid-row: 3;
  background-color: maroon;
}

</style>
