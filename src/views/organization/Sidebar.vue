<template>
    <div class="organization-sidebar">
        <div class="menu">
            <div v-for="item in types" :key="item.value"
                 :class="['sidebar-item', {active: item.value === selectedType}]"
                 @click="handleSelect(item.value)">
                <i :class="item.icon"></i>
                <span class="text">{{ item.name }}</span>
            </div>

            <div class="sidebar-item-group">
                <div class="subtitle">
                    <div class="collapse-container">
                        <span class="name">项目</span>
                        <i class="el-icon-arrow-up"></i>
                    </div>
                    <div class="opt">
                        <i class="el-icon-plus"></i>
                    </div>
                </div>
                <div class="sidebar-item">
                    <i class="iconfont icon-yichuangjian1"></i>
                    <span class="text">作业</span>
                </div>
                <div class="sidebar-item">
                    <i class="iconfont icon-yichuangjian1"></i>
                    <span class="text">project1</span>
                </div>
                <div :class="['sidebar-item', {active: selectedType === 'all'}]"
                     @click="handleSelect('all')">
                    <i class="iconfont icon-quanbu1"></i>
                    <span class="text">全部项目</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Sidebar',
        data() {
            return {
                types: [
                    {
                        icon: 'iconfont icon-shouye',
                        name: '首页',
                        value: 'home'
                    },
                    {
                        icon: 'iconfont icon-renwu',
                        name: '我执行的',
                        value: 'execute'
                    },
                    {
                        icon: 'iconfont icon-member',
                        name: '我参与的',
                        value: 'participate'
                    },
                    {
                        icon: 'iconfont icon-yichuangjian1',
                        name: '我创建的',
                        value: 'create'
                    },
                ]
            }
        },
        computed: {
            selectedType() {
                return this.$store.state.organization.selectedType;
            }
        },
        methods: {
            handleSelect(type) {
                this.$store.commit('organization/setSelectedType', type);
            }
        }
    }
</script>

<style scoped lang="scss">
    .organization-sidebar {
        height: calc(100vh - 50px);
        padding-bottom: 10px;
        position: sticky;
        top: 0;
        width: 315px;
        overflow: hidden;
        .menu {
            width: 275px;
            height: calc(100vh - 50px);
            padding-top: 40px;
            overflow: auto;
        }
        .sidebar-item {
            width: 224px;
            border-radius: 8px;
            height: 40px;
            line-height: 40px;
            padding: 0 20px;
            cursor: pointer;
            .iconfont {
                margin-right: 12px;
                color: #585858;
            }
            .text {
                font-size: 14px;
                color: #585858;
            }

            &:hover {
                background-color: #f7f7f7;
            }

            &.active {
                background-color: $primary-bg;
                font-weight: 900;
                .iconfont {
                    color: #1b9aee;
                }
            }
        }
        .sidebar-item-group {
            .subtitle {
                width: 224px;
                padding: 0 20px;
                font-size: 14px;
                display: flex;
                height: 36px;
                line-height: 36px;
                .collapse-container {
                    margin-right: 5px;
                    display: flex;
                    flex-grow: 1;
                    cursor: pointer ;
                    .name {
                        flex-grow: 1;
                    }
                    .el-icon-arrow-up {
                        line-height: 36px;
                    }
                }
                .el-icon-plus {
                    cursor: pointer ;
                    padding: 5px;
                    border-radius: 5px;
                    &:hover {
                        background: #e0f3ff;
                    }
                }
            }
        }
    }
</style>