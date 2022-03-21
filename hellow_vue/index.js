

let globalData = {
    message: 'Привет, Vue!',
    seen:true,
}

var app = new Vue({
    el: '#app',
    // data:
    data: globalData
})

setTimeout(() => {
    globalData.seen = false
}, 1000);



// повернуть текст //
var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Дом радной дом!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })


var app6 = new Vue({ el: '#components-demo' })