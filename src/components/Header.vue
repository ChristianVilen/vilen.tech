<template>
	<div class="container">
		<div class="row">
			<div class="col-sm-12 title">
				<h1>Resume</h1>
			</div>
		</div>
		<div class="row">
			<div class="col-sm">
				Anchor link to skill set
			</div>
			<div class="col-sm">
				Anchor link to projects
			</div>
			<div class="col-sm">
				Anchor link to experience
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Header',
}

</script>

<style scoped>

.title {
	color: blue;
}

.row {
	padding-bottom: 5rem;
}

.container {
	margin-top: 10rem;
	width: 100%;
	height: 20%;
	position: absolute;
	top: 0;
	left: 0;
}

h1 {
}
</style>