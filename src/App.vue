<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<style src="./assets/flexboxgrid.css"></style>
<style src="./assets/css/colors.css"></style>

<script>

export default {
}
</script>

<style>
body {
    overflow-x: hidden;
}

body::-webkit-scrollbar-thumb {
	background: var(--black-bg);
	border-radius: 10px;
	box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, .25), inset -2px -2px 2px rgba(0, 0, 0, .25);
}

body::-webkit-scrollbar-track {
	background: var(--scroll-bar);
}

body::-webkit-scrollbar {
	width: 20px;
	height: 5px;
}

* {
    font-family: 'Oswald', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

</style>
