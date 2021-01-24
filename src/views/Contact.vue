<template>
	<b-container class="cont">
		<b-row class="mb-4 pt-2">
			<b-col>
				<a href="https://www.linkedin.com/in/christianvilen/" target="_blank"
				>
					<img
							src="../assets/LI-Logo.png"
							alt="linkedin logo"
							class="linkedin-logo"
					>
				</a>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<ContactForm/>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import ContactForm from "@/components/ContactForm";

export default {
	name: "Contact",
	components: {ContactForm},
}
</script>

<style scoped>
.cont {
	height: 80vh
}
.linkedin-logo {
	width: 8rem;
	height: auto;
}
</style>