<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import cfg from '@/config/index'
export default defineComponent(
  {
    name: 'App',
    mounted ():void {
      this.init()
    },
    methods: {
      init ():void {
        console.log(cfg)
      }
    }
  }
)
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
