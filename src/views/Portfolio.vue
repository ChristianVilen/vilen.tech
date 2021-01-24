<template>
	<main>
		<b-row>
			<b-col cols="6" sm="4" v-for="(project, i) in projects" :key="i">
				<b-card class="mb-4 shadow card" :title="project.name" :sub-title="project.language">
					<b-card-text class="body-text" v-text="project.description"></b-card-text>
					<b-row>
						<b-col v-if="project.url">
							<b-link target="_blank" class="body-text" :href="project.html_url">View</b-link>
						</b-col>
					</b-row>
				</b-card>
			</b-col>
		</b-row>
		<b-row class="mt-2 mb-2">
			<b-col>
				<b-link href="https://github.com/ChristianVilen">/ChristianVilen</b-link>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<img class="octocat-img" src="../assets/Octocat.png" alt="Github Octocat">
			</b-col>
		</b-row>
	</main>
</template>

<script>
import axios from 'axios'

export default {
	name: "Portfolio",
	data() {
		return {
			projects: [],
		}
	},
	mounted() {
		this.getRepos()
	},
	methods: {
		getRepos() {
			axios.get('https://api.github.com/users/ChristianVilen/repos')
					.then(r => {
						this.projects = r.data.reverse()
					})
					.catch(e => console.log(e))
		}
	}
}
</script>

<style scoped>
.octocat-img {
	width: 200px;
	height: auto;
}

.body-text {
	min-height: 6rem;
	max-height: 6rem;
	overflow: auto;
}
</style>