const App = {
    data() {
        return {
            resolve: "",
            result: "0",
            retu: "Ac",
        };
    },
    methods: {
        solve() {
            if (this.resolve.length) {
                this.result = eval(this.resolve);
            }
        },
        plusMinus() {
            if (this.resolve > 0) {
                this.resolve = "-" + this.resolve;
            } else if (this.resolve < 0) {
                this.resolve = this.resolve.slice(1, this.resolve.length);
            }
        },
    },
    computed: {
        ret() {
            if (this.resolve.length) {
                return "C";
            } else {
                return "Ac";
            }
        },
    },
};

const app = Vue.createApp(App);
app.mount("#app");
