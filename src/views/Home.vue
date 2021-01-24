<template>
	<div class="home">
		<b-row class="content">
			<b-col cols="12" sm="6" class="about-me">
				<h4 class="title">Software Development & Digital Marketing</h4>
				<p class="body-text">➜ I'm a highly motivated <b>software developer</b> who is getting his footing the industry.<br><br>
					➜ With my experience in many different projects and a <b>diverse</b> job description, I am able to
					quickly learn and
					adapt to new challenges and become a jack of all trades. May it be <b>front/backend
						development, devops,
						cloud technologies, or digital marketing.</b> <br><br>
					➜ New challenges attract me and lead to my personal professional growth. I am able to work well
					both in <b>agile</b>
					team environment and <b>independently</b>. <br><br>
					➜ On my free time I enjoy traveling ✈️ and a diversity of sports, such as <br> skiing ⛷️, mountain
					biking, jogging 🏃‍♂️, gym️, frisbee golf and
					motorsports 🏎 🏁.
				</p>
			</b-col>
			<b-col cols="12" sm="6">
				<b-card style="max-width: 540px; background: none; border: none;">
					<img src="../assets/IMG_1863.jpg" alt="profile" class="pic">
					<b-card-body title="Christian Vilen">
						<b-card-text>
							📍 Vantaa, Finland
						</b-card-text>
						<b-card-text>
							🗣 Finnish, English, Russian
						</b-card-text>
					</b-card-body>
				</b-card>
			</b-col>
		</b-row>
	</div>
</template>

<script>

export default {
	name: 'Home',
	components: {}
}
</script>

<style scoped>
.content {
	padding: 50px;
}

.pic {
	height: auto;
	width: 60%;
	border-radius: 30%;
}
</style>
