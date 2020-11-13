<template>
	<div id="personality">
		<div class="row inner">
			<div data-aos-duration="1250" data-aos="slide-right" class="card col-sm-12 col-xs-6">
				<div class="row">
					<div class="card-inner col-sm-8 col-xs-12">
						<h2>Section 1</h2>
						<p>Text</p>
					</div>
					<div class="col-sm-4"></div>
				</div>
			</div>
			<div data-aos-duration="1250" data-aos="slide-left" class="card col-sm-12 col-xs-6">
				<div class="row">
					<div class="col-sm-4"></div>
					<div class="card-inner col-sm-8 col-xs-12">
						<h2>Section 1</h2>
						<p>Text</p>
					</div>
				</div>
			</div>
			<div data-aos-duration="1250" data-aos="slide-right" class="card col-sm-12 col-xs-6">
				<div class="row">
					<div class="card-inner col-sm-8 col-xs-12">
						<h2>Section 1</h2>
						<p>Text</p>
					</div>
					<div class="col-sm-4"></div>
				</div>
			</div>
			<div data-aos-duration="1250" data-aos="slide-left" class="card col-sm-12 col-xs-6">
				<div class="row">
					<div class="col-sm-4"></div>
					<div class="card-inner col-sm-8 col-xs-12">
						<h2>Section 1</h2>
						<p>Text</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Personality',
	components: { },
}
</script>

<style scoped>
#personality {
	width: 100%;
}

.inner {
	width: 70%;
	margin-left: auto;
	margin-right: auto;
}

.card:nth-child(even) * {
	text-align: right;
}

.card-inner {
	height: 40vh;
	background-color: #fff;
	border-radius: 25px;
	padding: 50px;
	margin-top: 50px;
	margin-bottom: 50px;
}
</style>