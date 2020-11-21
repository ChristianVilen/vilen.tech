<template>
    <div id="personality">
        <div class="row inner">
            <div data-aos-duration="1250" data-aos="slide-right" class="card col-sm-12 col-xs-6">
                <div class="row">
                    <div class="card-inner col-sm-8 col-xs-12">
                        <h2>Creativity</h2>
                        <div class="row">
                            <div class="col-xs-8">
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
                            <div class="col-xs-8">

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
                            <div class="col-xs-8">
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
                            <div class="col-xs-8">
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
</style>