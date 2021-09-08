const HelloMixin = {
  data: () => ({
    messageFromMixin: 'Hello from Mixin!'
  }),
  created() {
    this.hello()
  },
  methods: {
    hello() {
      console.log('hello from mixin!')
    },
    conflicting() {
      console.log('from mixin')
    }
  }
}

export default HelloMixin