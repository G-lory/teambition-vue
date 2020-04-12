<template>
    <div id="app">
        <tb-header></tb-header>

        <router-view class="view-content"/>
    </div>
</template>

<script>
    import TbHeader from './components/TbHeader';

    export default {
        name: 'App',
        components: {
            'tb-header': TbHeader
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss">
    #app {
        .view-content {
            top: 48px;
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            overflow-y: auto;
        }
    }
</style>
