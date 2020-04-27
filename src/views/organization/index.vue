<template>
    <div class="organization">
        <sidebar></sidebar>
        <component :is="rightComponent" class="right-component"></component>
    </div>
</template>

<script>
    import Sidebar from '@/views/organization/Sidebar';
    import Home from '@/views/organization/Home';
    import MyExecution from '@/views/organization/MyExecution';
    import MyParticipate from '@/views/organization/MyParticipate';
    import MyCreated from '@/views/organization/MyCreated';

    export default {
        name: 'Organization',
        components: {
            sidebar: Sidebar,
            home: Home,
            'my-execution': MyExecution
        },
        computed: {
            selectedType() {
                return this.$store.state.organization.selectedType;
            },
            rightComponent() {
                if (this.selectedType === 'home') return Home;
                if (this.selectedType === 'execute') return MyExecution;
                if (this.selectedType === 'participate') return MyParticipate;
                if (this.selectedType === 'create') return MyCreated;
                return null;
            }
        }
    }
</script>

<style scoped lang="scss">
    .organization {
        display: flex;
        padding: 0 80px;
        .right-component {
            flex-grow: 1;
        }
    }
</style>