<template>
	<b-container id="app">
		<b-button variant="dark" class="color-btn" @click="changeTheme">Random color</b-button>
		<b-img src="./assets/header-img.svg" height="200" width="200" alt="Header image" style="margin-top: 10rem"></b-img>
		<Header class="header"/>
		<router-view/>
	</b-container>
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

.header {
	margin-bottom: 5rem;
}

.color-btn {
	position: absolute;
	top: 40px;
	right: 40px;
}

@media screen and (max-width: 678px) {
	.header {
		margin-bottom: 0;
	}
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
			const colors = ['yellow', 'red', 'blue', 'dark', 'green']
			const randomNumber = Math.floor(Math.random() * colors.length)

			return colors[randomNumber]
		}
	}
}
</script>