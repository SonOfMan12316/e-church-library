<template>
  <div class="app">
      <router-view/>
  </div>
</template>

<style>
body, 
html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
  min-height: 100vh;
  position: relative;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
