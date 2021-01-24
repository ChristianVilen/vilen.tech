<template>
	<main>
		<b-tabs pills card align="center" v-model="tabIndex">

			<b-tab active :title-link-class="linkClass(0)">
				<template #title>Work Experience</template>
				<div class="card-holder" v-for="(exp, eIndex) in exps" :key="eIndex">
					<b-card class="p-3 mb-4 shadow" :title="exp.title" :sub-title="exp.employer">
						<b-card-text>{{ exp.time }}</b-card-text>
						<b-card-text>{{ exp.desc }}</b-card-text>
					</b-card>
				</div>
			</b-tab>

			<b-tab class="tab" :title-link-class="linkClass(1)">
				<template #title>Education</template>
				<div class="card-holder" v-for="(edu, eduIndex) in educations" :key="eduIndex">
					<b-card class="p-3 mb-4 shadow" :title="edu.degree" :sub-title="edu.program">
						<b-card-text>{{ edu.school }}</b-card-text>
						<b-card-text>{{ edu.time }}</b-card-text>
					</b-card>
				</div>
			</b-tab>

			<b-tab class="tab" :title-link-class="linkClass(2)">
				<template #title>Certifications</template>
				<div class="card-holder" v-for="(cert, cIndex) in certs" :key="cIndex">
					<b-card class="p-3 mb-4 shadow" :title="cert.title" :sub-title="cert.issuer">
						<b-card-text>{{ cert.issued }}</b-card-text>
					</b-card>
				</div>
			</b-tab>
		</b-tabs>
	</main>
</template>

<script>
export default {
	name: "Resume",
	data() {
		return {
			tabIndex: 0,
			exps: [
				{
					title: 'Software Developer',
					time: 'Mar 2020 - Present',
					employer: 'PHZ Full Stack Oy',
					desc: 'Software development and design in several software projects in house and for customers of PHZ.'
				},
				{
					title: 'Software Developer Intern',
					time: 'Jan 2020 - Mar 2020',
					employer: 'PHZ Full Stack Oy',
					desc: 'Marketing and software development in several in house projects.'
				},
				{
					title: 'Delivery Driver / COO',
					time: '2017 - 2020',
					employer: 'Kuljetusliike Startti Oy',
					desc: 'Driver, Transport Coordinator, procurement, recruitment and training'
				}
			],
			educations: [
				{
					degree: 'Bachelor of Business Administration (BBA)',
					program: 'Business Information Technologies',
					school: 'Laurea University of Applied Science',
					time: '2017 - 2020'
				},
				{
					degree: 'Graduate of Finnish Matriculation Examination',
					program: 'Upper Secondary School',
					school: 'Lumon Lukio',
					time: '2013 - 2016'
				}
			],
			certs: [
				{
					title: 'AWS Certified Solutions Architect - Associate',
					issuer: 'Amazon Web Services (AWS',
					issued: 'Issued Jul 2020'
				},
				{
					title: 'The Fundamentals of Digital Marketing',
					issuer: 'Google Digital Garage',
					issued: 'Issued Aps 2020'
				}
			]
		}
	},
	methods: {
		linkClass(idx) {
			if (this.tabIndex === idx) {
				return ['bg-dark', 'text-light']
			} else {
				return ['bg-light', 'text-dark']
			}
		}
	}
}
</script>

<style scoped>
</style>