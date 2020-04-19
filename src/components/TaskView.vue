<template>
    <el-dialog width="760px"
               custom-class="task-view"
               @close="handleClose"
               :modal-append-to-body="false"
               :visible="visible">
        <div slot="title">
            <h3>任务</h3>
        </div>
        <div class="left">
            <div class="task-title">{{ taskForm.title }}</div>
            <el-form label-width="160px"
                     label-position="left"
                     size="small"
                     :model="taskForm">
                <el-form-item>
                    <span slot="label" class="label">
                        <i class="iconfont icon-wancheng"></i>
                        <span>状态</span>
                    </span>
                    <el-select v-model="taskForm.status">
                        <el-option label="已完成" value="1"></el-option>
                        <el-option label="未完成" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <span slot="label" class="label">
                        <i class="iconfont icon-member"></i>
                        <span>状态</span>
                    </span>
                    <span>待认领</span>
                </el-form-item>
                <el-form-item>
                    <span slot="label" class="label">
                        <i class="iconfont icon-rili"></i>
                        <span>时间</span>
                    </span>
                    <el-date-picker
                            v-model="taskForm.timerange"
                            type="datetimerange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <span slot="label" class="label">
                        <i class="iconfont icon-quanbu"></i>
                        <span>项目</span>
                    </span>
                    <el-select v-model="taskForm.project">
                        <el-option value="项目1"></el-option>
                        <el-option value="项目2"></el-option>
                        <el-option value="项目3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <span slot="label" class="label">
                        <i class="iconfont icon-beizhu"></i>
                        <span>备注</span>
                    </span>
                    <el-input v-model="taskForm.remark" type="textarea"></el-input>
                </el-form-item>
                <el-form-item>
                    <span slot="label" class="label">
                        <i class="iconfont icon-youxianji"></i>
                        <span>优先级</span>
                    </span>
                    <el-select v-model="taskForm.priority">
                        <el-option value="1" label="较低"></el-option>
                        <el-option value="2" label="普通"></el-option>
                        <el-option value="3" label="紧急"></el-option>
                        <el-option value="4" label="非常紧急"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <span slot="label" class="label">
                        <i class="iconfont icon-biaoqian"></i>
                        <span>标签</span>
                    </span>
                    <el-select v-model="taskForm.tags"
                               multiple
                               filterable
                               allow-create>
                        <el-option
                                v-for="item in tagOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <span slot="label" class="label">
                        <i class="iconfont icon-icon-"></i>
                        <span>子任务</span>
                    </span>
                    <el-button type="text">添加子任务</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        name: 'TaskView',
        props: {
            taskObj: Object,
            visible: Boolean
        },
        data() {
            return {
                taskForm: {
                    title: '今天写完任务弹出框',
                    status: '1',
                    timerange: '',
                    project: '',
                    priority: '',
                    tags: [],
                    remark: ''
                },
                tagOptions: []
            }
        },
        watch: {
            taskObj() {
                // this.taskForm = JSON.parse(JSON.stringify(this.taskObj));
                this.taskForm.title = this.taskObj.content;
            }
        },
        methods: {
            handleClose() {
                this.$emit('update:visible', false);
            }
        }
    }
</script>

<style scoped lang="scss">
    .task-view {
        .task-title {
            line-height: 30px;
            margin-bottom: 20px;
            font-size: 18px;
            font-weight: 900;
        }
        .label {
            line-height: 30px;
            color: #8c8c8c;
            .iconfont {
                display: inline-block;
                width: 20px;
                margin-right: 10px;
            }
        }
    }
</style>