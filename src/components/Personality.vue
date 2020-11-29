<template>
    <div id="personality">
        <div class="row">
            <div class="col-xs-12 title">
                <h1><mark>Personality</mark></h1>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <TabContainer class="tab-container" />
            </div>
        </div>
        <div class="row banner">
            <div class="col-xs-12">
                <el-link id="redbull" type="primary" href="https://www.wingfinder.com/" target="_blank"
                         rel=”noreferrer” style="color: black">Personality test done at
                    <mark>Red Bull Wingfinder</mark>
                </el-link>
            </div>
        </div>
    </div>
</template>

<script>
import TabContainer from "@/components/TabContainer";
export default {
    name: 'Personality',
    components: {TabContainer},
}
</script>

<style scoped>

.title {
    text-align: center;
    margin-top: 7rem;
}

.tab-container {
    margin: 4rem auto 0;
    height: 100%;
    width: 75%;
}

.blob-dark-blue svg {
    position: absolute;
    top: 0;
    z-index: -1;
    margin-top: 175rem;
    width: 100%;
    height: 100%;
}

.banner {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}

#personality {
    width: 100%;
}

@media screen and (max-width: 600px) {
    .tab-container {
        height: 100%;
        width: 95%;
        margin: 5rem auto 0;
    }

    .inner {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }

    .card-inner {
        height: 25rem;
        padding: 50px;
        margin-top: 50px;
        margin-bottom: 5px;
    }

    .emoji {
        font-size: 5rem;
    }

    .banner {
        margin-top: 1.5rem;
        margin-left: auto;
        margin-right: auto;
    }

    #redbull {
        font-size: 10px;
    }

    .blob-dark-blue {
        height: 100%;
        width: 100%;
    }

    .blob-dark-blue svg {
        position: absolute;
        z-index: -1;
        margin-top: 190rem;
    }
}

</style>