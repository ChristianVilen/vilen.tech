<template>
	<section id="contact">
        <div class="row" id="icons">
			<div class="col-xs-4 links">
				<a href="https://www.linkedin.com/in/christianvilen/" rel="noopener noreferrer" target="_blank"><font-awesome-icon class="icon" id="linkedin" :icon="['fab', 'linkedin']" /></a>
			</div>
            <div class="col-xs-4 links">
				<a href="https://github.com/ChristianVilen" rel="noopener noreferrer" target="_blank"><font-awesome-icon class="icon" id="github" :icon="['fab', 'github']" /></a>
			</div>
            <div class="col-xs-4 links">
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

a #linkedin {
    text-decoration: none;
    color: var(--linkedin);
}

a #github {
    text-decoration: none;
    color: var(--github)
}

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

#mail {
	color: var(--mail);
}

@media screen and (max-width: 600px) {
    .icon {
        font-size: 4rem;
        margin: 10px;
    }

    #contact {
        height: 20vh;
        width: 100vw;
        display: flex;
        align-items: center;
    }
}
</style>