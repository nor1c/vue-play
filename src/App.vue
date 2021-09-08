<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/hello-world">Greet</router-link> |
    <router-link to="/counter">Counter</router-link> | 
    <router-link to="/handling-user-input">Handling Input</router-link> | 
    <router-link to="/lifecycle-hooks">Hooks</router-link> | 
    <router-link to="/computed-properties">Computed</router-link> | 
    <router-link to="/watchers">Watchers</router-link> | 
    <router-link to="/simple-todo-list-app">Todo App</router-link> | 
    <router-link to="/custom-events">Custom Events</router-link> | 
    <router-link to="/provide-inject">Provide/Inject</router-link> | 
    <router-link to="/transition-animation">Transition and Animation</router-link> | 
    <router-link to="/composition-api">Composition API</router-link> | 
    <router-link to="/mixins">Mixins</router-link> | 
    <router-link to="/misc">Misc</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
