<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-12 title">
                <h1 id="title">Christian Vilen</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-xs subtitle">
                <h2>Software Development & Digital Marketing</h2>
                <blockquote>Writing bad code is prerequisite to writing good code</blockquote>
            </div>
        </div>
        <div class="blob">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FF0066"
                      d="M28,-55.9C34.5,-44.7,36.8,-33.6,47.6,-24.3C58.5,-15,77.9,-7.5,81.4,2C85,11.6,72.7,23.2,61.7,32.4C50.8,41.5,41.2,48.2,31.2,55.2C21.1,62.3,10.6,69.7,-2.2,73.4C-14.9,77.2,-29.7,77.2,-38.9,69.6C-48,62.1,-51.4,46.9,-59.3,34C-67.2,21.1,-79.6,10.6,-84.2,-2.6C-88.7,-15.8,-85.3,-31.5,-76.2,-42.4C-67.2,-53.2,-52.4,-59.2,-38.7,-66.3C-25.1,-73.3,-12.5,-81.6,-0.9,-80C10.7,-78.5,21.5,-67.1,28,-55.9Z"
                      transform="translate(100 100)"/>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
blockquote {
    font-family: 'Playfair Display', serif;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
    quotes: "\201C" "\201D" "\2018" "\2019";
}

.blob {
    position: relative;
    z-index: -1;
    top: 0;
    left: 0;
}

blockquote:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
}

blockquote p {
    display: inline;
}

h1 {
    padding: 0;
    margin: 0;
}

.title {
    text-align: center;
    font-size: 6vw;
    color: black;
}

.row {
    padding-bottom: 5rem;
}

.container {
    margin-top: 10rem;
    width: 100%;
    height: 20%;
    position: absolute;
    top: 0;
    left: 0;
}

.subtitle {
    opacity: 1;
    text-align: center;
    font-size: 1.5vw;

    color: #2b2b2b;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 2s;
}

@media screen and (max-width: 600px) {
    .title {
        text-align: center;
        font-size: 10vw;
        color: black;
    }

    .row {
        padding-bottom: 5rem;
    }

    .container {
        margin-top: 10rem;
        width: 100%;
        height: 20%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .subtitle {
        opacity: 1;
        text-align: center;
        font-size: 4vw;

        color: #2b2b2b;
        animation-name: fadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: 2s;
    }
}

@keyframes fadeInOpacity {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>