import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/site/Home'
import ApiCep from "./components/site/ApiCep";
import ApiCurrencies from "./components/site/ApiCurrencies";
import ImgBase64 from "./components/site/ImgBase64";

Vue.use(Router)

export default new Router({
    mode: "history",
    hash: false,
    routes: [
        {
            path: '/',
            nome: 'Home',
            component: Home
        },
        {
            path: '/api-cep',
            nome: 'ApiCep',
            component: ApiCep
        },
        {
            path: '/api-moedas',
            nome: 'ApiCurrencies',
            component: ApiCurrencies
        },
        {
            path: '/img-base-64',
            nome: 'ImgBase64',
            component: ImgBase64
        }
    ]
})