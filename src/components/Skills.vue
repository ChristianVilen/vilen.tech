<template>
	<div id="skills" data-aos="zoom-in" data-aos-duration="1000" class="row card-container">
		<div data-aos="flip-up" data-aos-delay="900" data-aos-duration="200" class="card-container-inner col-xs-6 col-md-6 col-lg-3">
			<Card
				class="card"
				title="Miscellaneous"
				subtitle="ge"
				text="hello text"
				:svg="miscellaneous"
			/>
		</div>
		<div data-aos="flip-up" data-aos-delay="200" data-aos-duration="200" class="card-container-inner col-xs-6 col-md-6 col-lg-3">
			<Card
				class="card"
				title="Agile"
				subtitle="ge"
				text="hello text"
				:svg="agile"
			/>
		</div>
		<div data-aos="flip-up" data-aos-delay="600" data-aos-duration="200" class="card-container-inner col-xs-6 col-md-6 col-lg-3">
			<Card
				class="card"
				title="Devops"
				subtitle="ge"
				text="hello text"
				:svg="devops"
			/>
		</div>
		<div data-aos="flip-up" data-aos-delay="400" data-aos-duration="200" class="card-container-inner col-xs-6 col-md-6 col-lg-3">
			<Card
				class="card"
				title="Backend"
				subtitle="ge"
				text="hello text"
				:svg="backEnd"
			/>
		</div>
		<div data-aos="flip-up" data-aos-delay="100" data-aos-duration="200" class="card-container-inner col-xs-6 col-md-6 col-lg-3">
			<Card
				class="card"
				title="Digital Marketing"
				subtitle="hi"
				text="hello text"
				:svg="digitalMarketing"
			/>
		</div>
		<div data-aos="flip-up" data-aos-delay="700" data-aos-duration="200" class="card-container-inner col-xs-6 col-md-6 col-lg-3">
			<Card
				class="card"
				title="Cloud"
				subtitle="ge"
				text="hello text"
				:svg="cloud"
			/>
		</div>
		<div data-aos="flip-up" data-aos-delay="300" data-aos-duration="200" class="card-container-inner col-xs-6 col-md-6 col-lg-3">
			<Card
				class="card"
				title="Frontend"
				subtitle="ge"
				text="hello text"
				:svg="frontEnd"
			/>
		</div>
		<div data-aos="flip-up" data-aos-delay="500" data-aos-duration="200" class="card-container-inner col-xs-6 col-md-6 col-lg-3">
			<Card
				class="card"
				title="Soft Skills"
				subtitle="ge"
				text="hello text"
				:svg="frontEnd"
			/>
		</div>
	</div>
</template>


<script>
import Card from "@/components/Cards";

export default {
	name: 'Skills',
	components: {Card},
	data() {
		return {
			digitalMarketing: '<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-subtract" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
				'  <path fill-rule="evenodd" d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"/>\n' +
				'</svg>',
			agile: '<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-chat-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
				'  <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>\n' +
				'  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>\n' +
				'</svg>',
			frontEnd: '<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-display" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
				'  <path d="M5.75 13.5c.167-.333.25-.833.25-1.5h4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75z"/>\n' +
				'  <path fill-rule="evenodd" d="M13.991 3H2c-.325 0-.502.078-.602.145a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/>\n' +
				'</svg>',
			devops: '<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-server" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
				'  <path fill-rule="evenodd" d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4C14.665 5.474 11.68 6.667 8 6.667 4.318 6.667 1.333 5.473 1.333 4V2.667zm0 3.667v3C1.333 10.805 4.318 12 8 12c3.68 0 6.665-1.193 6.667-2.665V6.334c-.43.32-.931.58-1.458.79C11.81 7.684 9.967 8 8 8c-1.967 0-3.81-.317-5.21-.876a6.508 6.508 0 0 1-1.457-.79zm13.334 5.334c-.43.319-.931.578-1.458.789-1.4.56-3.242.876-5.209.876-1.967 0-3.81-.316-5.21-.876a6.51 6.51 0 0 1-1.457-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667v-1.665z"/>\n' +
				'</svg>',
			cloud: '<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-cloud" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
				'  <path fill-rule="evenodd" d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>\n' +
				'</svg>',
			miscellaneous: '<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-shuffle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
				'  <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>\n' +
				'  <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>\n' +
				'</svg>',
			backEnd: '<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-code" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
				'  <path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>\n' +
				'</svg>'
		};
	},
}
</script>

<style scoped>
.card {
	color: white;
  text-align: center;
}

.card-container {
  margin-top: 5rem;
  max-width: 80vw;
}


@media screen and (max-width: 600px) {
  .card-container {
    padding: 10px;
    margin-left: 5px;
  }
}

#skills {
	padding-bottom: 15rem;
}
</style>