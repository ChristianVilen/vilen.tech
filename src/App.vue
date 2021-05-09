<template>
  <b-container id="app">
    <b-row>
      <b-col>
        <b-img class="header-img" src="./assets/mountain_logo.png" height="300" width="300" alt="Header image"
        ></b-img>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <Header class="header"/>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <router-view/>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <Footer id="footer"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {Footer, Header},
  mounted() {
    const body = document.body
    const theme = localStorage.getItem('theme')

    if (theme) {
      body.classList.add(theme)
    }
  },
  methods: {
    changeTheme() {
      const body = document.body

      body.className = ""

      body.classList.add(this.randomColor())

      localStorage.setItem('theme', body.classList)
    },
    randomColor() {
      const colors = ['yellow', 'red', 'blue', 'dark', 'green']
      const randomNumber = Math.floor(Math.random() * colors.length)

      return colors[randomNumber]
    }
  }
}
</script>


<style>
@import "assets/css/colors.css";
@import "assets/css/global.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
}

body, html {
  background: var(--bg);
  transition: background 500ms ease-in-out, color 1000ms ease-in-out;
}

.header {
  margin-bottom: 2rem;
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.header-img {
  margin-top: 2rem;
}

@media screen and (max-width: 678px) {
  .header {
    margin-bottom: 0;
  }

  .header-img {
    margin-top: 1rem;
  }
}
</style>