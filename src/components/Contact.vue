<template>
	<section id="contact">
        <h1>Find me on</h1>
        <div class="row container">
            <div class="col-xs-4">LinkedIn</div>
            <div class="col-xs-4">Github</div>
            <div class="col-xs-4">Instagram</div>
        </div>
    </section>
</template>

<script>
export default {
	name: 'Contact',
}
</script>

<style scoped>
h1 {
    padding-top: 10rem;
    text-align: center;
    color: white;
    font-size: 4rem;
}
#contact {
	height: 60vh;
	width: 100vw;
	background-color: #679186;
}

.container {
  padding-top: 15rem;
  margin: auto;
  width: 40vw;
}
</style>