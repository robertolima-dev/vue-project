<template>
    <div>
        <div>
            <div class="mt-5">
                <!-- <label for="">PESQUISE POR UM CEP</label> -->
                <input type="text" class="form-control input-cep" v-model="cep" placeholder="Selecione um CEP">
            </div>
            <div class="mt-3">
                <button class="btn btn-info button" @click="resultApi()">Ver Resultado</button>
            </div>
        </div>

        <div class="mt-5">
            <h3>Resultado da pasquisa: {{result.cep}}</h3>
            <div v-if="result !== ''">
                <h5>{{result.logradouro}} - {{result.bairro}} - {{result.localidade}} - {{result.uf}}</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cep: '',
            result: ''
        }
    },
    created() {
        
    },
    props: {
        
    },
    methods: {
        resultApi() {
            this.$http.get(`https://viacep.com.br/ws/${this.cep}/json/`)
            .then(response => {
                this.result = response.data
            })
        }
    }
}
</script>

<style scoped>
.input-cep {
    width: 250px;
    margin-left: auto;
    margin-right: auto;
}
.button {
    width: 250px;
}
</style>