<template>
    <div class="organization">
        <sidebar></sidebar>
        <home></home>
    </div>
</template>

<script>
    import Sidebar from '@/views/organization/Sidebar';
    import Home from '@/views/organization/Home';

    export default {
        name: 'Organization',
        components: {
            sidebar: Sidebar,
            home: Home
        }
    }
</script>

<style scoped lang="scss">
    .organization {
        display: flex;
        padding: 0 80px;
    }
</style>