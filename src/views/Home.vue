<template>
	<div class="home">
		<b-row class="content">
			<b-col class="about-me">
				<h4 class="title">Software Development & Digital Marketing</h4>
				<p class="body-text">➜ I'm a highly motivated <b>software developer</b> who is getting his footing the industry.<br><br>
					➜ With my experience in many different projects and a <b>diverse</b> job description, I am able to
					quickly learn and
					adapt to new challenges and become a jack of all trades. May it be <b>front/backend
						development, devops,
						cloud technologies, or digital marketing.</b> <br><br>
					➜ New challenges attract me and lead to my personal professional growth. I am able to work well
					both in <b>agile</b>
					team environment and <b>independent</b>ly. <br><br>
					➜ On my free time I enjoy traveling ✈️ and a diversity of sports, such as <br> skiing ⛷️, mountain
					biking, jogging 🏃‍♂️, gym️, frisbee golf and
					motorsports 🏎 🏁.
				</p>
			</b-col>
			<b-col>
				<b-row>
					<b-col>
						<img src="../assets/IMG_1863.jpg" alt="profile pic" class="pic">
					</b-col>
				</b-row>
				<b-row>
					<b-col class="list">
						<ul>
							Christian Vilen
						</ul>
						<ul>
							📍 Vantaa, Finland
						</ul>
						<ul>
							🗣 Finnish, English, Russian
						</ul>
					</b-col>
				</b-row>
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

.about-me {
}

.pic {
	height: auto;
	width: 60%;
	border-radius: 30%;
}

.list {
	padding: 10px;
	font-size: 1.3vw;
	margin-left: 40px;
}

.list ul {
	text-align: left;
	margin: 0;
}

.title {
	font-size: 1.5vw;
}

.body-text {
	margin-top: 20px;
	font-size: 1.3vw;
}

@media screen and (max-width: 678px) {
	.title {
		font-size: 6vw;
	}

	.body-text {
		font-size: 4vw;
		margin-bottom: 45px;
	}

	.list {
		font-size: 3vw;
	}
}
</style>
