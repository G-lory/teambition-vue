<template>
    <div class="tb-header">
        <div class="left">
            <i class="iconfont icon-dock"></i>
            <span class="logo">teambition</span>
        </div>
        <div class="middle">
            <el-input class="search" placeholder="搜索 xia的团队" size="small">
                <i slot="prefix" class="iconfont icon-fangdajing"></i>
            </el-input>
        </div>
        <div class="right">
            <i class="el-icon-circle-plus"></i>
            <i class="iconfont icon-fengexian"></i>
            <span>我的</span>
            <i class="iconfont icon-fengexian"></i>
            <i class="iconfont icon-rili"></i>
            <i class="iconfont icon-message"></i>
            <i class="iconfont icon-fengexian"></i>
            <i class="iconfont icon-message"></i>
            <i class="iconfont icon-message"></i>
            <span>邀请</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TbHeader'
    }
</script>

<style lang="scss">
    .tb-header {
        height: 50px;
        box-shadow: 0 0 8px 0 rgba(0,0,0,.1);
        display: flex;
        line-height: 50px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        .left {
            .iconfont {
                color: #a6a6a6;
                margin: 0 15px 0 20px;
                border-radius: 3px;
                padding: 3px;
                cursor: pointer;
                &:hover {
                    background: #e0f3ff;
                }
            }
            .logo {
                font-size: 18px;
                font-weight: 900;
            }
        }
        .middle {
            flex-grow: 1;
            text-align: center;
            .search {
                width: 260px;
                .el-input__inner {
                    border-radius: 20px;
                    background: #f7f7f7;
                    border: none;
                }
            }
        }
        .right {
            .el-icon-circle-plus {
                color: $primary;
                font-size: 20px;
            }
        }
    }
</style>