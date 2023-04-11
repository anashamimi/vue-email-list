const { createApp } = Vue;

createApp({
    data() {
        return {
            randomMail: [],
            basePath: 'https://flynn.boolean.careers/exercises/api/',
        }
    },
    methods: {
        getData() {
            this.randomMail = [];

            for (let i = 0; i < 10; i++) {

                axios.get(this.basePath + 'random/mail').then((res) => {
                    console.log(res.data.response);
                    this.randomMail.push(res.data.response);
                });
            }



        }
    },
    mounted() {
        this.getData();
    }
}).mount('#app');

