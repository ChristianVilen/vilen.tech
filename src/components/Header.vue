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
h1 {
  padding: 0;
  margin: 0;
}

.title {
  text-align: center;
  font-size: 6vw;
  -webkit-text-stroke: 2px #454545; /* width and color */
  color: #fdcfb5;
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
  font-size: 2vw;

  color: #000000;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 2s;
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