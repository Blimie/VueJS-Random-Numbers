new Vue({
    el: '#app',
    data: {
        min: '',
        max: '',
        numbers: []
    },
    methods: {

        randomNumClick: function () {
            const randomNum = getRandomInt(+this.min, +this.max);
            this.numbers.push(randomNum);
        },

        sortClick: function () {
            this.numbers.sort((a, b) => a - b);
        }
    }
});

function getRandomInt(min, max) {     
    return Math.floor(Math.random() * (max - min + 1) + min);
}