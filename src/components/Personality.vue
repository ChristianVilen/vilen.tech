<template>
    <div id="personality">
        <div class="row inner">
            <div data-aos-duration="1250" data-aos="slide-right" class="card col-sm-12 col-xs-6">
                <div class="row">
                    <div class="card-inner col-sm-8 col-xs-12">
                        <h2>Creativity</h2>
                        <div class="row">
                            <div class="col-xs-12 col-md-8">
                                <ul class="list">
                                    <li>
                                        Adaptable
                                    </li>
                                    <li>
                                        Classical
                                    </li>
                                    <li>
                                        Focused
                                    </li>
                                    <li>
                                        Innovative
                                    </li>
                                    <li>
                                        Open to Experience
                                    </li>
                                    <li>
                                        Pragmatic
                                    </li>
                                </ul>
                            </div>
                            <div class="col-xs-4 emoji">
                                <div>🧑‍🎨</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4"></div>
                </div>
            </div>
            <div data-aos-duration="1250" data-aos="slide-left" class="card col-sm-12 col-xs-6">
                <div class="row">
                    <div class="col-sm-4"></div>
                    <div class="card-inner col-sm-8 col-xs-12">
                        <h2>Thinking</h2>
                        <div class="row">
                            <div class="col-xs-4 emoji">
                                <div>🤔</div>
                            </div>
                            <div class="col-xs-12 col-md-8">

                                <ul class="list">
                                    <li>
                                        Intuitive
                                    </li>
                                    <li>
                                        Hands-on Learner
                                    </li>
                                    <li>
                                        Balanced Learner
                                    </li>
                                    <li>
                                        Analytical
                                    </li>
                                    <li>
                                        Agile
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos-duration="1250" data-aos="slide-right" class="card col-sm-12 col-xs-6">
                <div class="row">
                    <div class="card-inner col-sm-8 col-xs-12">
                        <h2>Drive</h2>
                        <div class="row">
                            <div class="col-xs-12 col-md-8">
                                <ul class="list">
                                    <li>
                                        Achiever
                                    </li>
                                    <li>
                                        Confident
                                    </li>
                                    <li>
                                        Disciplined
                                    </li>
                                    <li>
                                        Modest
                                    </li>
                                    <li>
                                        Patient
                                    </li>
                                    <li>
                                        Relaxed
                                    </li>
                                </ul>
                            </div>
                            <div class="col-xs-4 emoji">
                                <div>🏎</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4"></div>
                </div>
            </div>
            <div data-aos-duration="1250" data-aos="slide-left" class="card col-sm-12 col-xs-6">
                <div class="row">
                    <div class="col-sm-4"></div>
                    <div class="card-inner col-sm-8 col-xs-12">
                        <h2>Connections</h2>
                        <div class="row">
                            <div class="col-xs-4 emoji">
                                <div>🙋‍♂️</div>
                            </div>
                            <div class="col-xs-12 col-md-8">
                                <ul class="list">
                                    <li>
                                        Autonomous
                                    </li>
                                    <li>
                                        Balanced
                                    </li>
                                    <li>
                                        Diplomatic
                                    </li>
                                    <li>
                                        Direct
                                    </li>
                                    <li>
                                        Emotive
                                    </li>
                                    <li>
                                        Independent
                                    </li>
                                    <li>
                                        Sociable
                                    </li>
                                    <li>
                                        Supportive
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row blob2">
                <svg style="width: 100%; z-index: -1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#F2F4F8" d="M34.7,-58.1C46.3,-53.3,58.1,-46.8,63.6,-36.9C69,-26.9,68.1,-13.4,70.1,1.1C72.1,15.7,76.9,31.5,69,37.2C61.1,42.9,40.4,38.6,26.8,39.9C13.2,41.2,6.6,48,-3,53.2C-12.5,58.3,-25,61.6,-33.9,57.6C-42.9,53.6,-48.2,42.3,-51.8,31.5C-55.3,20.6,-56.9,10.3,-59.8,-1.7C-62.7,-13.7,-66.8,-27.3,-61.7,-35.4C-56.6,-43.5,-42.3,-45.9,-30.5,-50.6C-18.6,-55.2,-9.3,-62,1.1,-63.9C11.5,-65.8,23,-62.8,34.7,-58.1Z" transform="translate(100 100)" />
                </svg>
            </div>
            <div class="row banner">
                <div class="col-xs-12">
                    <p>Personality test done at <a href="https://www.wingfinder.com/">Red Bull Wingfinder</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Personality',
    components: {},
}
</script>

<style scoped>

.blob2 {
    margin-top: 40rem;
    width: 100%;
    position: absolute;
}

.banner {
    margin-left: auto;
}

a {
    color: red;
}

#personality {
    width: 100%;
}

h2 {
    color: var(--text-black);
    text-decoration: underline;
    margin-bottom: 0;
}

li {
    color: var(--linkedin);
    font-size: larger;
}

.list {
    list-style-type: none;
    padding: 0;
}

.inner {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
}

.emoji {
    font-size: 6rem;
}

.card:nth-child(even) * {
    text-align: right;
}

.card:nth-child(odd) * {
}

.card-inner:nth-child(even) {
    background: rgb(0, 0, 0);
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(247, 247, 247, 1) 80%);
}

.card-inner:nth-child(odd) {
    background: rgb(0, 0, 0);
    background: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(247, 247, 247, 1) 80%);
}

.card-inner {
    height: 20rem;
    padding: 50px;
    margin-top: 50px;
    margin-bottom: 50px;
}

@media screen and (max-width: 600px) {
    .inner {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    .card-inner {
        height: 25rem;
        padding: 50px;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .emoji {
        font-size: 5rem;
    }

    .banner {
        margin-top: 1.5rem;
        margin-left: auto;
        margin-right: auto;
    }
}

</style>