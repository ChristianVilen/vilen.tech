<template>
  <main>
    <b-row id="inner">
      <b-col>
        <h1>404</h1>
        <p>Page not found
          <mark>.</mark>
        </p>
      </b-col>
    </b-row>
  </main>
</template>

<script>
export default {
  name: 'FourOFour',
}
</script>

<style scoped>
#inner {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}

h1 {
  font-size: 15rem;
}

p {
  text-align: right;
  width: 90%;
  font-size: 1.4rem;
}

@media screen and (max-width: 530px) {
  h1 {
    font-size: 10rem;
  }
}

@media screen and (max-width: 360px) {
  h1 {
    font-size: 5rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>