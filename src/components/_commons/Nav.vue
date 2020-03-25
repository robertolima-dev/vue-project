<template>
    <b-navbar toggleable="lg" type="dark" variant="info">

        <b-navbar-brand>
            <router-link class="nav-link" to="/">
                <img src="../../assets/images/code.svg" alt="" class="icon-menu">
            </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>

            <b-navbar-nav class="ml-auto">
                <b-navbar-nav>

                    <b-nav-item>
                        <router-link class="nav-link" to="/api-cep">API CEP</router-link>
                    </b-nav-item>

                    <b-nav-item>
                        <router-link class="nav-link" to="/api-moedas">API MOEDAS</router-link>
                    </b-nav-item>

                    <b-nav-item>
                        <router-link class="nav-link" to="/img-base-64">IMG BASE64</router-link>
                    </b-nav-item>

                </b-navbar-nav>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    created() {
        
    },
    props: {
        
    },
    methods: {
        
    }
}
</script>

<style scoped>
.menu {
    margin-bottom: -50px;
    padding-bottom: 0px;
}
.icon-menu {
    width: 40px;
}
</style>


