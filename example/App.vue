<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <boss-button label="阿斯顿发四大"></boss-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import BossButton from 'boss-wm-ui/lib/Button/index'
export default defineComponent({
    name: 'App',
    components: {
        // BossButton
    },
})
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
