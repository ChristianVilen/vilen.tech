<template>
	<main>
		<div class="header">
			<Header/>
		</div>
		<div class="content">
			<About/>
			<Personality/>
			<Skills />
			<Contact />
		</div>
	</main>
</template>

<script>
import Skills from "@/components/Skills";
import Header from "@/components/Header";
import About from "@/components/About";
import Personality from "@/components/Personality";
import Contact from "@/components/Contact";

export default {
    components: {Contact, Personality, About, Header, Skills},
};
</script>

<style scoped>
.header {
	height: 100vh;
}

.content {
	height: 100vh;
}

</style>
