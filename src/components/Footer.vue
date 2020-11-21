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
    background-color: var(--second-bg);
    width: 100vw;
    position: absolute;
}

.footer-content {
    text-align: center;
    color: var(--text-light);
    padding: 10px;
}

a {
    color: var(--text-light);
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