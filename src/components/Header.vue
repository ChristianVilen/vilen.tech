<template>
	<b-navbar class="justify-content-center">
		<b-navbar-nav @click="changeTheme">
			<b-nav-item to="/">Christian</b-nav-item>
			<b-nav-item to="Resume">Resume</b-nav-item>
			<b-nav-item to="Portfolio">Portfolio</b-nav-item>
			<b-nav-item to="About">About</b-nav-item>
		</b-navbar-nav>
	</b-navbar>
</template>

<script>
export default {
	name: "Header",
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

<style scoped>
</style>