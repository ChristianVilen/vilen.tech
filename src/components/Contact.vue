<template>
	<section id="contact">
        <div class="row" id="icons">
			<div class="col-xs-4">
				<font-awesome-icon class="icon" id="linkedin" :icon="['fab', 'linkedin']" />
			</div>
            <div class="col-xs-4">
				<font-awesome-icon class="icon" id="github" :icon="['fab', 'github']" />
			</div>
            <div class="col-xs-4">
				<a href="mailto:c.vilen@outlook.com"><font-awesome-icon class="icon" id="mail" icon="envelope" /></a>
			</div>
        </div>
    </section>
</template>

<script>
export default {
	name: 'Contact',
}
</script>

<style scoped>

#contact {
	height: 60vh;
    width: 100vw;
	background-color: var(--second-bg);
	display: flex;
	align-items: center;
}

#icons {
	margin-left: auto;
	margin-right: auto;
	width: fit-content;
}

.icon {
	font-size: 15rem;
	margin: 30px;
}

#linkedin {
	color: var(--linkedin);
}

#mail {
	color: var(--mail);
}
</style>