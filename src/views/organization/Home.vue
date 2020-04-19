<template>
    <div class="organization-home">
        <div class="title">最近浏览的任务</div>
        <div class="my-task">
            <div v-for="(item, index) in taskList" :key="index" class="task-item">
                <i class="iconfont icon-wancheng2"></i>
                <span class="content" @click="showTaskView(item)">{{ item.content }}</span>
                <span class="time">{{ formatTime(item.accessTime) }}查看过</span>
            </div>
            <div class="task-more"
                 v-if="!showMore && myTaskList.length > 5"
                 @click="showMore = true">
                <i class="iconfont icon-moreread"></i>
                <span class="tip">加载更多</span>
            </div>
            <div class="task-less"
                 v-if="showMore"
                 @click="showMore = false">
                <i class="iconfont icon-up2"></i>
                <span class="tip">收起</span>
            </div>
        </div>

        <task-view :task-obj="taskObj" :visible.sync="taskVisible"></task-view>
    </div>
</template>

<script>
    import moment from 'moment';
    import 'moment/locale/zh-cn';
    import TaskView from '@/components/TaskView';

    export default {
        name: 'OrganizationHome',
        components: {
            'task-view': TaskView
        },
        data() {
            return {
                myTaskList: [{"content":"分享笔记的显示不完整","accessTime":"2020-04-12T12:39:55.576Z"},
                    {"content":"阅读「分享」中的使用案例，学习 Teambition 如何做到作业管理","accessTime":"2020-04-11T15:18:09.502Z"},
                    {"content":"创建任务1","accessTime":"2020-04-11T15:17:42.256Z"},
                    {"content":"笔记本封面图片可以自定义修改","accessTime":"2020-04-11T15:16:11.016Z"},
                    {"content":"笔记支持移动到不同笔记本","accessTime":"2020-04-11T15:10:08.761Z"},
                    {"content":"Web 端开发任务","accessTime":"2020-04-11T15:09:43.804Z"},
                    {"content":"笔记可以自动继承笔记本的权限","accessTime":"2020-04-11T15:07:59.256Z"},
                    {"content":"Android 端开发任务","accessTime":"2020-04-11T15:07:32.038Z"},
                    {"content":"橙色：较紧急的任务","accessTime":"2020-04-11T15:05:51.022Z"},
                    {"content":"急急急","accessTime":"2020-04-11T15:02:29.251Z"},
                    {"content":"m","accessTime":"2020-04-11T14:59:36.005Z"}],
                showMore: false,
                taskObj: {},
                taskVisible: false
            }
        },
        computed: {
            taskList() {
                return this.showMore ? this.myTaskList : this.myTaskList.slice(0, 5);
            }
        },
        methods: {
            formatTime(v) {
                moment().locale('zh-cn');
                if (moment().diff(v, 'h') < 3) {
                    return moment(v).fromNow();
                }
                return moment(v).calendar();
            },
            showTaskView(item) {
                this.taskObj = item;
                this.taskVisible = true;
            }
        }
    }
</script>

<style scoped lang="scss">
    .organization-home {
        flex-grow: 1;
        padding-top: 40px;
        .title {
            font-size: 16px;
            line-height: 24px;
            font-weight: 500;
            margin-bottom: 10px;
        }
        .my-task {
            .task-item {
                display: flex;
                line-height: 52px;
                cursor: pointer;
                border-bottom: 1px solid #f0f0f0;
                .iconfont {
                    font-size: 18px;
                    color: #8c8c8c;
                    margin-right: 15px;
                }
                .content {
                    flex-grow: 1;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
                .time {
                    color: #bfbfbf;
                    font-size: 12px;
                }
                .tip {
                    color: #8c8c8c;
                }
            }
            .task-more, .task-less {
                cursor: pointer;
                display: flex;
                line-height: 44px;
                color: #8c8c8c;
                .iconfont {
                    font-size: 18px;
                    margin-right: 15px;
                }
                &:hover {
                    color: #0171c2;
                }
            }
        }
    }
</style>