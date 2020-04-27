<template>
    <div class="my-created">
        <div class="title">
            <span class="text">我创建的</span>
            <div class="filter">
                <el-select v-model="queryObj.taskStatus" size="small">
                    <el-option value="所有任务"></el-option>
                    <el-option value="已完成"></el-option>
                    <el-option value="未完成"></el-option>
                </el-select>

                <el-select v-model="queryObj.taskOrder" size="small">
                    <el-option value="按最近截止"></el-option>
                    <el-option value="按最新更新"></el-option>
                    <el-option value="按最新创建"></el-option>
                    <el-option value="按最高优先级"></el-option>
                </el-select>
            </div>
            <el-button type="text">创建</el-button>
        </div>

        <div class="task-list">
            <header>以后或未安排 · {{taskList.length}}</header>
            <div v-for="(item, index) in taskList" :key="index" class="task-item">
                <el-checkbox v-model="item.isDone" class="check"></el-checkbox>
                <div class="middle">
                    <div class="task-content">{{ item.content }}</div>
                    <div class="task-info" v-if="showItemInfo(item)">
                        <span>{{ item.taskflowstatus && item.taskflowstatus.name }}</span>
                        <span>{{ item.scenariofieldconfig && item.scenariofieldconfig.name }}</span>
                        <span>{{ item.project && item.project.name }}</span>
                    </div>
                </div>
                <div class="divider"></div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'MyCreated',
        data() {
            return {
                queryObj: {
                    taskStatus: '未完成',
                    taskOrder: '按最近截止',
                },
                taskContent: '',
                placeholder: '添加任务',
                taskList: [{
                    "content": "saxd",
                    "created": "2020-04-26T15:16:55.254Z",
                    "isDone": false,
                    "priority": 0,
                    "scenariofieldconfig": {
                        "icon": null,
                        "name": null
                    },
                    "project": null,
                    "taskflowstatus": null
                }, {
                    "content": "sss",
                    "created": "2020-04-26T15:14:28.388Z",
                    "isDone": false,
                    "priority": 0,
                    "scenariofieldconfig": {
                        "icon": null,
                        "name": null
                    },
                    "project": null,
                    "taskflowstatus": null
                }, {
                    "content": "分享笔记的显示不完整",
                    "created": "2019-05-27T13:05:58.242Z",
                    "isDone": false,
                    "priority": 0,
                    "scenariofieldconfig": {
                        "icon": "task",
                        "name": "任务"
                    },
                    "project": {
                        "_id": "5cebe0b5a8b26900198f9e08",
                        "name": "敏捷开发",
                        "uniqueIdPrefix": "YJIR"
                    },
                    "taskflowstatus": {
                        "_id": "5cebe0b5a8b26900198f9e0f",
                        "_taskflowId": "5cebe0b5a8b26900198f9e09",
                        "kind": "start",
                        "name": "待处理"
                    }
                }, {
                    "content": "急急急",
                    "created": "2020-04-11T14:58:08.535Z",
                    "isDone": false,
                    "priority": 0,
                    "scenariofieldconfig": {
                        "icon": null,
                        "name": null
                    },
                    "project": null,
                    "taskflowstatus": null
                }, {
                    "content": "↓点击蓝色按钮，添加任务",
                    "created": "2019-06-08T05:55:50.464Z",
                    "isDone": false,
                    "priority": 0,
                    "scenariofieldconfig": {
                        "icon": "task",
                        "name": "任务"
                    },
                    "project": {
                        "_id": "5cfb4de69cf66f00199e9dfc",
                        "name": "Teambition 新手引导",
                        "uniqueIdPrefix": null
                    },
                    "taskflowstatus": null
                }, {
                    "content": "你收到了一条新任务，点击查看任务详情",
                    "created": "2019-06-08T05:55:50.359Z",
                    "isDone": false,
                    "priority": 0,
                    "scenariofieldconfig": {
                        "icon": "task",
                        "name": "任务"
                    },
                    "project": {
                        "_id": "5cfb4de69cf66f00199e9dfc",
                        "name": "Teambition 新手引导",
                        "uniqueIdPrefix": null
                    },
                    "taskflowstatus": null
                }]
            }
        },
        methods: {
            handleFocus() {
                this.placeholder = '添加任务，回车快速创建';
            },
            handleBlur() {
                this.placeholder = '添加任务';
            },
            showItemInfo(item) {
                return (item.taskflowstatus && item.taskflowstatus.name)
                    || item.scenariofieldconfig && item.scenariofieldconfig.name
                    || item.project && item.project.name;
            }
        }
    }
</script>

<style scoped lang="scss">
    .my-created {
        padding-top: 40px;
        .title {
            font-size: 16px;
            line-height: 40px;
            font-weight: 500;
            margin-bottom: 10px;
            display: flex;
            .text {
                flex-grow: 1;
            }
        }
        .task-list {
            header {
                height: 44px;
                line-height: 44px;
                color: #262626;
                font-weight: 500;
                border-bottom: 1px solid #f0f0f0;
            }
            .task-item {
                display: flex;
                padding: 15px 0;
                position: relative;
                .check {
                    margin-right: 10px;
                    text-align: center;
                    flex-grow: 0;
                }
                .middle {
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    .task-content {
                        line-height: 20px;
                        min-height: 20px;
                    }
                    .task-info {
                        color: #8c8c8c;
                        & > * {
                            display: inline-flex;
                            align-items: center;
                            max-width: 100%;
                            height: 16px;
                            vertical-align: middle;
                            margin-top: 12px;
                            margin-right: 16px;
                        }
                    }
                }
                .divider {
                    position: absolute;
                    bottom: 0;
                    left: 20px;
                    right: 20px;
                    height: 1px;
                    background-color: #f0f0f0;
                    transition: background-color 0.3s ease;
                }
            }
        }
    }
</style>