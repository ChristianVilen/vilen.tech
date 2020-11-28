<template>
    <div class="row">
        <div class="col-xs-1 col-md-2 col-lg-3">
        </div>
        <div class="col-xs-10 col-md-8 col-lg-6 card">
            <div class="content">
                <h1 class="section-title">About me</h1>
                <h2>Full Stack Software Developer at PHZ Full Stack</h2>
                <p>I'm a highly motivated software developer who is getting his footing the industry. <br><br>
                    With my experience in many different projects and a diverse job description, I am able to
                    quickly learn and
                    adapt to new challenges and become a jack of all trades. May it be front/backend
                    development, devops,
                    cloud technologies, or digital marketing. <br><br>
                    New challenges attract me and lead to my personal professional growth. I am able to work well
                    both in agile
                    team environment and independently. <br><br>
                    On my free time I enjoy a diversity of sports, such as skiing, jogging, gym, frisbee golf and
                    motorsports.
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
    border-radius: 20px;
    background: #954141;
    box-shadow:  -12px -12px 8px #3c1a1a,
    12px 12px 8px #ee6868;
}

.content {
    margin-top: 5px;
    padding-left: 50px;
    padding-right: 50px;
    color: white;
    font-size: 21px;
}

.section-title {
    font-size: 5rem;
    margin: 0 auto;
    text-align: center;
    color: var(--text-light);
}

@media screen and (max-width: 600px) {
    .section-title {
        font-size: 2rem;
        -webkit-text-stroke: 1px black;
    }

    .card {
        height: 34rem
    }

    .content h2 {
        font-size: 15px;
        text-align: center;
    }

    .content p{
        font-size: 14px;
        margin-top: 0;
    }
}
</style>