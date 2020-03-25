<template>
    <div>
        <div>
            <div class="mt-5">
                <!-- <label for="">PESQUISE POR UMA MOEDA</label> -->
                <b-form-select class="form-control input-currencies" v-model="selected" :options="options"></b-form-select>
            </div>
            <div class="mt-3">
                <button class="btn btn-info button" @click="selectValue()">Ver Resultado</button>
            </div>
        </div>

        <div class="mt-5">
            <h3>Resultado da pasquisa: {{selectedValue.name}}</h3>
            <div v-if="selectedValue !== ''">
                <!-- <h5>Código: {{selectedValue.code}}</h5> -->
                <h5>1 {{selectedValue.code}} = R$ {{Number(selectedValue.high).toLocaleString('pt-BR', format)}}</h5>
                <h5>1 {{selectedValue.code}} = R$ {{Number(selectedValue.low).toLocaleString('pt-BR', format)}}</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cep: '',
            options: [],
            selected: null,
            resultAll: '',
            selectedValue: '',
            format: { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }
        }
    },
    created() {
        this.getCurrencies()
    },
    props: {
        
    },
    methods: {
        getCurrencies() {
            this.$http.get(`https://economia.awesomeapi.com.br/json/all`)
            .then(response => {
                this.resultAll = response.data
                this.options = [
                    { value: null, text: 'Selecione uma Moeda' },
                    { value: this.resultAll.USD.code, text: this.resultAll.USD.name },
                    { value: this.resultAll.USDT.code, text: this.resultAll.USDT.name },
                    { value: this.resultAll.CAD.code, text: this.resultAll.CAD.name },
                    { value: this.resultAll.EUR.code, text: this.resultAll.EUR.name },
                    { value: this.resultAll.GBP.code, text: this.resultAll.GBP.name },
                    { value: this.resultAll.ARS.code, text: this.resultAll.ARS.name },
                    { value: this.resultAll.BTC.code, text: this.resultAll.BTC.name },
                    { value: this.resultAll.LTC.code, text: this.resultAll.LTC.name },
                    { value: this.resultAll.JPY.code, text: this.resultAll.JPY.name },
                    { value: this.resultAll.CHF.code, text: this.resultAll.CHF.name },
                    { value: this.resultAll.AUD.code, text: this.resultAll.AUD.name },
                    { value: this.resultAll.CNY.code, text: this.resultAll.CNY.name },
                    { value: this.resultAll.ILS.code, text: this.resultAll.ILS.name },
                    { value: this.resultAll.ETH.code, text: this.resultAll.ETH.name },
                    { value: this.resultAll.XRP.code, text: this.resultAll.XRP.name },
                ]
            })
        },
        selectValue() {
            const arrayCurrencies = [
                this.resultAll.USD,
                this.resultAll.USDT,
                this.resultAll.CAD,
                this.resultAll.EUR,
                this.resultAll.GBP,
                this.resultAll.ARS,
                this.resultAll.BTC,
                this.resultAll.LTC,
                this.resultAll.JPY,
                this.resultAll.CHF,
                this.resultAll.AUD,
                this.resultAll.CNY,
                this.resultAll.ILS,
                this.resultAll.ETH,
                this.resultAll.XRP
                ]
            arrayCurrencies.map(i => {
                if(i.code === this.selected) {
                    this.selectedValue = i
                }
            })
            console.log(this.selectedValue)
        }
    }
}
</script>

<style scoped>
.input-currencies {
    width: 250px;
    margin-left: auto;
    margin-right: auto;
}
.button {
    width: 250px;
}
</style>