<template>
  <div id="app">
    <color-picker :muestras="['e3342f', '3490dc', 'f6993f', '38c172', 'fff']">
    </color-picker>
  </div>
</template>

<script>
import ColorPicker from './components/ColorPicker.vue'

export default {
  name: 'app',
  components: {
    ColorPicker
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
