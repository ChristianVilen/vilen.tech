<template>
	<div id="app">
		<div class="header">
			<Header/>
		</div>
		<div class="content">
			<router-view/>
		</div>
	</div>
</template>

<style src="./assets/flexboxgrid.css"></style>

<script>

import Header from "@/components/Header";

export default {
	components: {Header}
}
</script>

<style>

.header {
	height: 110vh;
}

.content {
	height: 100vh;
}

body {
	background-image: url("./assets/Pastel4.png");
	background-repeat: no-repeat;
	background-size: cover;
}

body::-webkit-scrollbar-thumb {
	background: #000000;
	border-radius: 10px;
	box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, .25), inset -2px -2px 2px rgba(0, 0, 0, .25);
}

body::-webkit-scrollbar-track {
	background: #f5d9ef;
}

body::-webkit-scrollbar {
	width: 20px;
	height: 5px;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	padding: 15px;
}

</style>
