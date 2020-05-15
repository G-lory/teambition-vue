<template>
    <div class="project-container">
        <div class="project-nav">
            <section class="nav-body">
                <ul class="menu-wrapper pull-left">
                    <li class="menu-item">任务</li>
                    <li class="menu-item">统计</li>
                </ul>
            </section>
        </div>

        <div class="board-view">
            <div class="board-flex-view">
                <left-panel class="board-tasklist-left-panel"></left-panel>

                <right-panel></right-panel>
            </div>
        </div>
    </div>
</template>

<script>
    import LeftPanel from '@/views/project/LeftPanel';
    import RightPanel from '@/views/project/RightPanel';

    export default {
        name: 'Project',
        components: {
            'left-panel': LeftPanel,
            'right-panel': RightPanel
        }
    }
</script>

<style scoped lang="scss">
.project-container {
    .project-nav {
        position: fixed;
        top: 48px;
        left: 0;
        right: 0;
        height: 41px;
        border-bottom: 1px solid #e5e5e5;
        z-index: 50;
        transition: right 218ms ease;
        display: flex;
        .menu-wrapper {
            position: relative;
            height: 41px;
            border: none;
            padding-left: 50px;
        }
        .menu-item {
            float: left;
            color: #8c8c8c;
            height: 41px;
            padding: 10px 16px;
        }
    }
    .board-view {
        position: fixed;
        top: 89px;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 0;
        overflow: hidden;
        transition: width 218ms ease;
    }
    .board-flex-view {
        display: flex;
        width: 100%;
        height: 700px;
    }
    .board-tasklist-left-panel {
        flex-shrink: 0;
        flex-grow: 0;
        flex-basis: 300px;
        height: 100%;
        z-index: 2;
    }
}
</style>