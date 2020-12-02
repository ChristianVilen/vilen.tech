<template>
    <footer>
        <div class="row footer-content">
            <div class="col-xs-12 col-md-3">
                <p><a href="/privacy">⎨Privacy Policy⎬</a></p>
            </div>

            <div class="col-xs-12 col-md-3">
                <p v-html="'⎨© Christian Vilen ' + year + '⎬'"></p>
            </div>

            <div class="col-xs-12 col-md-3">
                <p><a href="/cookies">⎨Cookie Policy⎬</a></p>
            </div>
            <div class="col-xs-12 col-md-3">
                <p><a @click="$emit('openConsentBanner')">⎨Cookie Preferences⎬</a>
                </p>
            </div>
        </div>
        <div class="custom-shape-divider-bottom-1606642358">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                 preserveAspectRatio="none">
                <path
                    d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                    class="shape-fill"></path>
            </svg>
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
.custom-shape-divider-bottom-1606642358 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: -1;
}

.custom-shape-divider-bottom-1606642358 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 60px;
}

.custom-shape-divider-bottom-1606642358 .shape-fill {
    fill: #E6E6E6;
}

footer {
    width: 100%;
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

a:hover {
    cursor: pointer;
    color: #7e7e7e;
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