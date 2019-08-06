<template>
    <div id="main">
        <div class="container">
            <div class="row"><h1>Modules</h1></div>

            <div class="row">
                <section v-if="errored">
                    <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment.
                        Veuillez
                        réessayer ultérieurement.</p>
                </section>

                <section class="row align-items-center" v-else>
                    <div v-if="loading" class="lds-dual-ring"></div>

                    <div v-bind:key="capteur._id"
                         v-else
                         v-for="capteur in info"
                         class="col align-self-center capteur"
                    >

                        <div class="demo-card-square mdl-card mdl-shadow--2dp">
                            <div class="mdl-card__title mdl-card--expand">
                                <h2 class="mdl-card__title-text">{{ capteur["name"] }}</h2>
                            </div>
                            <div class="mdl-card__supporting-text">
                                {{ capteur["modele"] }}
                            </div>
                            <div class="mdl-card__actions mdl-card--border">
                                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                                    18° : 1020hpa
                                </a>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    </div>

</template>

<script>
    import Axios from "axios";

    export default {
        name: 'HelloWorld',
        data() {
            return {
                info: null,
                loading: true,
                errored: false
            }
        },
        mounted() {
            Axios
                .get('https://bmp280.herokuapp.com/api/capteur')
                .then(response => {
                    this.info = response.data
                })
                .catch(() => {
                    this.errored = true
                })
                .finally(() => this.loading = false)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .capteur{
      padding: 16px;
    }
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
