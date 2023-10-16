const app = Vue.createApp({
    // template: '<h1>Hello World</h1>', -> a template can be added from here, but it is better to mount an id.

    mounted() {
        this.getUser();
    },
    // Data is commonly a function.
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            picture: ''
        }
    },

    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            console.log(results)
            this.firstName = results[0].name.first,
                this.lastName = results[0].name.last,
                this.email = results[0].email,
                this.gender = results[0].gender,
                this.picture = results[0].picture.large
        },
    },
})

// The mounted id is what the app is going to render.
app.mount('#app')
