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

.card-svg {
}

.card {
	display: flex;
	position: relative;
	flex-direction: column;
	height: 350px;
	width: 350px;
	min-width: 150px;
	padding: 1rem;

	border-radius: 16px;
	background: #d9e4dd;
	box-shadow: -1rem 0 3rem #777676;

	transition: .2s;
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