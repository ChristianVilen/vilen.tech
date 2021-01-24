<template>
	<footer>
		<p v-text="'©️ Christian Vilen' + ' ' + year "></p>
	</footer>
</template>

<script>
export default {
	name: "Footer",
	data() {
		return {
			year: ''
		}
	},
	mounted() {
		const date = new Date();
		this.year = date.getFullYear();
	},
}
</script>

<style scoped>
p {
	font-size: 10px;
	opacity: 75%;
}

</style>