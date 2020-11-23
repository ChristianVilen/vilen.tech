<template>
    <footer>
        <div class="row footer-content">
            <div class="col-xs-12 col-md-4">
                <p><a href="/privacy">⎨Privacy Policy⎬</a></p>
            </div>

            <div class="col-xs-12 col-md-4">
                <p v-html="'⎨© Christian Vilen ' + year + '⎬'" ></p>
            </div>

            <div class="col-xs-12 col-md-4">
                <p><a href="/cookies">⎨Cookie Policy⎬</a></p>
            </div>
        </div>
    </footer>
</template>


<script>

export default {
    name: 'Footer',
    data() {
        return {
            year: ''
        }
    },
    mounted() {
        const date = new Date();
        this.year = date.getFullYear();
    },
}
</script>

<style>
footer {
    width: 100vw;
	overflow-x: hidden;
    position: absolute;
}

.footer-content {
    text-align: center;
    color: var(--text-black);
    padding: 10px;
}

p {
	max-width: fit-content;
	margin-left: auto;
	margin-right: auto;
}

a {
    color: var(--text-black);
    text-decoration: none;
}

@media screen and (max-width: 600px) {
    p {
        font-size: 15px;
    }

    .footer-content {
        padding: 0;
    }
}
</style>