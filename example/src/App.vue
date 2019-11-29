<template>
  <div id="app">
    <h1>テスト</h1>
    <button id="testBtn" @click="testBtn">テストボタン</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RecordingJs from "recording-js"

@Component
export default class App extends Vue {
  recording:any = null
  created() {
    this.recording = new RecordingJs()
  }
  testBtn() {
    this.recording.start()

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
