<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-12 title">
        <h1 id="title">Christian Vilen</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs subtitle">
        <h2>Software Development & Digital Marketing</h2>
          <blockquote>Writing bad code is prerequisite to writing good code</blockquote>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
blockquote {
    font-family: 'Playfair Display', serif;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
    quotes: "\201C""\201D""\2018""\2019";
}
blockquote:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
}
blockquote p {
    display: inline;
}
h1 {
  padding: 0;
  margin: 0;
}

.title {
  text-align: center;
  font-size: 6vw;
  color: white;
}

.row {
  padding-bottom: 5rem;
}

.container {
  margin-top: 10rem;
  width: 100%;
  height: 20%;
  position: absolute;
  top: 0;
  left: 0;
}

.subtitle {
  opacity: 1;
  text-align: center;
  font-size: 1.5vw;

  color: #2b2b2b;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 2s;
}
@media screen and (max-width: 600px) {
  .title {
    text-align: center;
    font-size: 10vw;
    color: white;
  }

  .row {
    padding-bottom: 5rem;
  }

  .container {
    margin-top: 10rem;
    width: 100%;
    height: 20%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .subtitle {
    opacity: 1;
    text-align: center;
    font-size: 1.5vw;

    color: #2b2b2b;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 2s;
  }
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>