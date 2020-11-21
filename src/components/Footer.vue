<template>
    <footer>
        <div class="row footer-content">
            <div class="col-xs-4">
                ⎨Privacy Policy⎬
            </div>
            <div class="col-xs-4" @click="openCookiePolicy()">
                ⎨Cookie Policy⎬
            </div>
            <div class="col-xs-4">
                ⎨Cookie Preferences⎬
            </div>
        </div>
        <div class="row copyright">
            <div class="col-xs-12">
                ⎨© Christian Vilen 2020⎬
            </div>
        </div>
    </footer>
</template>


<script>

export default {
    name: 'Footer',
    methods: {
        openCookiePolicy() {
            this.$router.push('/cookiepolicy')
        },
    }
}
</script>

<style>
footer {
    background-color: var(--black-bg);
}

.footer-content {
    text-align: center;
    color: var(--text-light);
    font-size: 1.2rem;
    padding: 10px;
}

.copyright {
    text-align: center;
    color: var(--text-light);
    padding-bottom: 5px;

}
</style>