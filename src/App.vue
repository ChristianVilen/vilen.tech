<template>
	<div id="app" @click="changeTheme">
		<img src="./assets/header-img.svg" height="200" width="200" alt="Header image" style="margin-top: 10rem">
		<Header/>
		<router-view/>
	</div>
</template>

<style>
@import "assets/css/colors.css";

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
</style>

<script>
import Header from "@/components/Header";

export default {
	components: {Header},
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
			const colors = ['yellow', 'red', 'blue', 'dark']
			const randomNumber = Math.floor(Math.random() * colors.length)

			return colors[randomNumber]
		}
	}
}
</script>