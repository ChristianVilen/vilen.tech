<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<style src="./assets/flexboxgrid.css"></style>

<script>

export default {
}
</script>

<style>
body {
    background-image: url("./assets/lighthouse.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    overflow-x: hidden;
    background-color: #000000;
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

* {
    font-family: 'Oswald', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

</style>
