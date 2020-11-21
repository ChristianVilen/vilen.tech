<template>
	<div id="app">
		<router-view></router-view>

        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F2F4F8" d="M34.7,-58.1C46.3,-53.3,58.1,-46.8,63.6,-36.9C69,-26.9,68.1,-13.4,70.1,1.1C72.1,15.7,76.9,31.5,69,37.2C61.1,42.9,40.4,38.6,26.8,39.9C13.2,41.2,6.6,48,-3,53.2C-12.5,58.3,-25,61.6,-33.9,57.6C-42.9,53.6,-48.2,42.3,-51.8,31.5C-55.3,20.6,-56.9,10.3,-59.8,-1.7C-62.7,-13.7,-66.8,-27.3,-61.7,-35.4C-56.6,-43.5,-42.3,-45.9,-30.5,-50.6C-18.6,-55.2,-9.3,-62,1.1,-63.9C11.5,-65.8,23,-62.8,34.7,-58.1Z" transform="translate(100 100)" />
        </svg>

        <svg class="blob2" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <path fill="#E8DAFF" d="M31.6,-58.1C43,-48.1,55.8,-43.8,63.5,-35.1C71.2,-26.4,73.8,-13.2,74.4,0.3C74.9,13.8,73.3,27.6,64.2,33.9C55.1,40.2,38.5,39.1,26.5,39.4C14.6,39.7,7.3,41.5,-2.9,46.6C-13.1,51.6,-26.3,59.9,-38.5,59.8C-50.7,59.6,-62.1,51,-66.8,39.6C-71.6,28.3,-69.7,14.1,-63.1,3.8C-56.4,-6.5,-45.1,-13,-40.9,-25.4C-36.8,-37.9,-40,-56.3,-34.4,-69.6C-28.7,-83,-14.4,-91.3,-2.2,-87.6C10.1,-83.8,20.1,-68.1,31.6,-58.1Z" transform="translate(100 100)" />
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
