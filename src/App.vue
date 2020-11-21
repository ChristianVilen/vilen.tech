<template>
	<div id="app">
		<router-view></router-view>

        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F2F4F8" d="M34.7,-58.1C46.3,-53.3,58.1,-46.8,63.6,-36.9C69,-26.9,68.1,-13.4,70.1,1.1C72.1,15.7,76.9,31.5,69,37.2C61.1,42.9,40.4,38.6,26.8,39.9C13.2,41.2,6.6,48,-3,53.2C-12.5,58.3,-25,61.6,-33.9,57.6C-42.9,53.6,-48.2,42.3,-51.8,31.5C-55.3,20.6,-56.9,10.3,-59.8,-1.7C-62.7,-13.7,-66.8,-27.3,-61.7,-35.4C-56.6,-43.5,-42.3,-45.9,-30.5,-50.6C-18.6,-55.2,-9.3,-62,1.1,-63.9C11.5,-65.8,23,-62.8,34.7,-58.1Z" transform="translate(100 100)" />
        </svg>
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
