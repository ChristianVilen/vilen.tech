<template>
	<div class="card">
		<div class="card-header">
			<h2 v-text="title"></h2>
			<h3 v-text="subtitle"></h3>
			<p v-text="text"></p>
		</div>
		<div class="card-name">
			<div class="card-svg">
				<div v-html="svg"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Card',
	props: ['title', 'text', 'subtitle', 'svg']
}
</script>

<style scoped>
.card-name {
	margin-top: 10rem;
  color: black;
}

.card-header {
  color: black;
}

.card {
	display: flex;
	position: relative;
	flex-direction: column;
	height: 350px;
	width: 350px;
	min-width: 150px;
	padding: 1rem;
  margin-left: auto;

	border-radius: 16px;
	background: #d9e4dd;
	box-shadow: -.5rem 0 3rem #777676;

	transition: .2s;
}

@media screen and (max-width: 600px) {
  h2 {
    font-size: medium;
  }
  h3 {
    font-size: medium;
  }
  p {
    font-size: medium;
  }
  .card {
    height: 150px;
    width: 150px;
    min-width: 150px;
    padding: 1rem;
    margin-left: auto;
  }
}

.card:focus-within ~ .card, .card:hover ~ .card {
	transform: translateX(-1rem);
}

.card:hover {
	transform: translateY(-1rem);
}

.card:not(:first-child) {
}


</style>