<template>
    <nav>
        <div id="nav-overlay">
            <div id="overlay" class="" v-bind:class="{ open: isActive}">
            </div>
            <div class="green sidebar-placeholder"></div>
            <div class="sidebar" @mouseover="toggle" @mouseleave="toggle">
                <div class="green"></div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navigation',
        methods: {
            toggle: function(){
                this.isActive = !this.isActive;
                // some code to filter users
            }
        },
        data () {
            return {
                isActive: false
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
