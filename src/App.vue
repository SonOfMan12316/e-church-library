<template>
  <div class="app">
      <!-- <transition name="slide" type="transition" mode="out-in"> -->
          <router-view></router-view>
      <!-- </transition> -->
  </div>
</template>

<style>
body, 
html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    /* overflow-y: hidden; 
    overflow-x: hidden; */
}

.app {
  min-height: 100vh;
  position: relative;
}

/* .slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 0.5s ease-out forwards;
  transition: opacity 1s;
  opacity: 1;
}

@keyframes slide-in {
  from {
      transform: translateX(250px);   
    } 
  to {
      transform: translateX(0);
  } 
} */

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
