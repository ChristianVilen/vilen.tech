<template>
    <div class="row">
        <div class="col-xs-1 col-md-2 col-lg-3">
        </div>
        <div class="col-xs-10 col-md-8 col-lg-6 card">
            <div class="content">
                <h1 class="section-title">
                    <mark>About me</mark>
                </h1>
                <h2>Software Developer at <b>PHZ Full Stack</b></h2>
                <p>➜ I'm a highly motivated <b>software developer</b> who is getting his footing the industry.<br><br>
                    ➜ With my experience in many different projects and a <b>diverse</b> job description, I am able to
                    quickly learn and
                    adapt to new challenges and become a jack of all trades. May it be <b>front/backend
                        development, devops,
                        cloud technologies, or digital marketing.</b> <br><br>
                    ➜ New challenges attract me and lead to my personal professional growth. I am able to work well
                    both in <b>agile</b>
                    team environment and <b>independent</b>ly. <br><br>
                    ➜ On my free time I enjoy traveling ✈️ and a diversity of sports, such as <br> skiing ⛷️, mountain
                    biking, jogging 🏃‍♂️, gym️, frisbee golf and
                    motorsports 🏎 🏁.
                </p>
            </div>
        </div>
        <div class="col-xs-1 col-md-2 col-lg-3">
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
}
</script>

<style scoped>

.card {
    height: 40rem;
    border-radius: 33px;
    background: #0071b3;
    box-shadow: -11px -11px 22px #003b5d,
    11px 11px 22px #00a7ff;
}

.content {
    margin-top: 5px;
    padding-left: 50px;
    padding-right: 50px;
    color: white;
    font-size: 17px;
}

.section-title {
    font-size: 5rem;
    margin: 0 auto;
    text-align: center;
    color: #FFFF7E;
}

@media screen and (max-width: 600px) {
    .section-title {
        font-size: 2rem;
    }

    .card {
        height: 34rem
    }

    .content {
        margin-top: 5px;
        padding-left: 30px;
        padding-right: 30px;
    }

    .content h2 {
        font-size: 11px;
        text-align: center;
    }

    .content p {
        font-size: 12px;
        margin-top: 0;
    }
}
</style>