<template>
    <div>
        <div>
            <div class="mt-5">
                <!-- <label for="">PESQUISE POR UMA MOEDA</label> -->
                <input type="file" ref="myFiles" class="form-control input-img" @change="base64Img" multiple>
            </div>
            <div class="mt-3">
                <button class="btn btn-info button" @click="seeImg()">Ver Imagem</button>
            </div>
        </div>

        <div class="mt-5 container">
            <h3>Resultado do upload: </h3>
            <img :src="img" alt="" class="img-fluid">
        </div>

        <div v-if="img !== ''" class="mt-5 container">
            <h3>Base 64: </h3>
            <div class="space-base64">
                <p>{{img}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            img: '',
            imgBase64: ''
        }
    },
    created() {
        
    },
    props: {
        
    },
    methods: {
        base64Img() {
            const fileToLoad = this.$refs.myFiles.files[0]
            var fileReader = new FileReader();
            fileReader.onload = (fileLoadedEvent) => {
                this.imgBase64 = fileLoadedEvent.target.result
                console.log(this.imgBase64)
            }
            fileReader.readAsDataURL(fileToLoad);
        },
        seeImg() {
            this.img = this.imgBase64
        }
    }
}
</script>

<style scoped>
.input-img {
    width: 250px;
    margin-left: auto;
    margin-right: auto;
}
.button {
    width: 250px;
}
.space-base64 {
    height: 400px;
    overflow-y: auto;
    word-break: normal;
    word-break: break-all;
}
</style>