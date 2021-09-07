<template>
  <div>
    <div>
      <h3>Class-based Animations & Transitions</h3>
      <div>
        Push this button to do something you shouldn't be doing:
        <div :class="{ shake: noActivated }">
          <button @click="noActivated = !noActivated">Click me</button>
          <span v-if="noActivated">Oh no!</span>
        </div>
      </div>
    </div>

    <hr>
    <div @mousemove="xCoordinate" :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }" class="movearea">
      <h3>Transition with Style Bindings</h3>
      <div>
        <h3>Move your mouse accross the screen</h3>
        <p>x: {{ x }}</p>
      </div>
    </div>

    <hr>
    <div>
      <h1>Enter & Leave Transitions</h1>
    </div>
    <br>
    <div>
      <h3>Transitioning Single Elements/Components</h3>
      <div>
        <button @click="show = !show">Toggle</button>
        <transition name="fade">
          <p v-if="show">hello</p>
        </transition>
      </div>
    </div>

    <hr>
    <div>
      <h3>List Entering/Leaving Transitions</h3>
      <div>
        <button @click="add">Add</button>
        <button @click="remove">Remove</button>
        <transition-group name="list" tag="p">
          <span v-for="item in items" :key="item" class="list-item">
            {{ item }}
          </span>
        </transition-group>
      </div>
    </div>

    <hr>
    <div>
      <h3>List Move Transitions</h3>
      <div>
        <button @click="shuffle">Shuffle</button>
        <transition-group name="flip-list" tag="ul">
          <li v-for="item in items" :key="item">
            {{ item }}
          </li>
        </transition-group>
        <transition-group name="list-complete" tag="p">
          <span v-for="item in items" :key="item" class="list-complete-item">
            {{ item }}
          </span>
        </transition-group>
      </div>
    </div>

    <hr>
    <div>
      <h3>Staggering List Transitions</h3>
      <div>
        <input type="text" v-model="query">
        <transition-group
          name="staggered-fade"
          tag="ul"
          :css="false"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
        >
          <li v-for="(item, index) in computedList" :key="item.msg" :data-index="index">
            {{ item.msg }}
          </li>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    noActivated: false,
    x: 0,
    show: false,
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    nextNum: 10,
    query: '',
    list: [
      { msg: 'Bruce Lee' },
      { msg: 'Jackie Chan' },
      { msg: 'Chuck Norris' }
    ]
  }),
  computed: {
    computedList() {
      let vm = this
      return this.list.filter(item => {
        return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
      })
    }
  },
  methods: {
    xCoordinate(e) {
      this.x = e.clientX
    },
    randomIndex() {
      return Math.floor(Math.random() * this.items.length)
    },
    add() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove() {
      this.items.splice(this.randomIndex(), 1)
    },
    shuffle() {
      this.items = _.shuffle(this.items)
    },
    beforeEnter(el) {
      console.log('entering...')
      el.style.opacity = 0
      el.style.height = 0
    },
    enter(el, done) {
      console.log('enter')
      gsap.to(el, {
        opacity: 1,
        height: '1.6em',
        delay: el.dataset.index * 0.15,
        onComplete: done
      })
    },
    leave(el, done) {
      console.log('leaving..')
      gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.15,
        onComplete: done
      })
    }
  }
}
</script>

<style scoped>
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
.movearea {
  transition: 0.2s background-color ease;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-item {
  transition: all 0.8s ease;
  display: inline-block;
  margin-right: 10px;
}

.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
}
.flip-list-move {
  transition: transform 0.8s ease;
}
</style>