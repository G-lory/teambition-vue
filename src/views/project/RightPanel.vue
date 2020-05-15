<template>
    <div class="right-panel">
        <div class="card-scene">
            <Container
                    orientation="horizontal"
                    @drop="onColumnDrop($event)"
                    drag-handle-selector=".column-drag-handle"
                    @drag-start="dragStart"
                    :drop-placeholder="upperDropPlaceholderOptions"
            >
                <Draggable v-for="column in scene.children" :key="column.id">
                    <div :class="column.props.className">
                        <div class="card-column-header">
                            <span class="column-drag-handle">&#x2630;</span>
                            {{ column.name }}
                        </div>
                        <Container
                                group-name="col"
                                @drop="(e) => onCardDrop(column.id, e)"
                                @drag-start="(e) => log('drag start', e)"
                                @drag-end="(e) => log('drag end', e)"
                                :get-child-payload="getCardPayload(column.id)"
                                drag-class="card-ghost"
                                drop-class="card-ghost-drop"
                                :drop-placeholder="dropPlaceholderOptions"
                        >
                            <Draggable v-for="card in column.children" :key="card.id">
                                <div :class="card.props.className" :style="card.props.style">
                                    <p>{{ card.data }}</p>
                                </div>
                            </Draggable>
                        </Container>
                    </div>
                </Draggable>
            </Container>
        </div>
    </div>
</template>

<script>
    import { Container, Draggable } from 'vue-smooth-dnd';

    const applyDrag = (arr, dragResult) => {
        const { removedIndex, addedIndex, payload } = dragResult
        if (removedIndex === null && addedIndex === null) return arr

        const result = [...arr]
        let itemToAdd = payload

        if (removedIndex !== null) {
            itemToAdd = result.splice(removedIndex, 1)[0]
        }

        if (addedIndex !== null) {
            result.splice(addedIndex, 0, itemToAdd)
        }

        return result
    }

    const scene = {
        type: 'container',
        props: {
            orientation: 'horizontal'
        },
        children: [
            {
                "id":"column1",
                "type":"container",
                "name":"快速入门",
                "props":{
                    "orientation":"vertical",
                    "className":"card-container"
                },
                "children":[
                    {
                        "type":"draggable",
                        "id":"10",
                        "props":{
                            "className":"card",
                            "style":{
                                "backgroundColor":"white"
                            }
                        },
                        "data":"什么是任务「执行者」？"
                    }
                ]
            },
            {
                "id":"column3",
                "type":"container",
                "name":"更多帮助",
                "props":{
                    "orientation":"vertical",
                    "className":"card-container"
                },
                "children":[
                    {
                        "type":"draggable",
                        "id":"30",
                        "props":{
                            "className":"card",
                            "style":{
                                "backgroundColor":"pink"
                            }
                        },
                        "data":"你收到了一条新任务，点击查看任务详情"
                    }
                ]
            }
        ]
    }

    export default {
        name: 'RightPanel',
        components: {Container, Draggable},
        data () {
            return {
                scene,
                upperDropPlaceholderOptions: {
                    className: 'cards-drop-preview',
                    animationDuration: '150',
                    showOnTop: true
                },
                dropPlaceholderOptions: {
                    className: 'drop-preview',
                    animationDuration: '150',
                    showOnTop: true
                }
            }
        },
        methods: {
            onColumnDrop (dropResult) {
                const scene = Object.assign({}, this.scene)
                scene.children = applyDrag(scene.children, dropResult)
                this.scene = scene
            },
            onCardDrop (columnId, dropResult) {
                if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
                    const scene = Object.assign({}, this.scene)
                    const column = scene.children.filter(p => p.id === columnId)[0]
                    const columnIndex = scene.children.indexOf(column)
                    const newColumn = Object.assign({}, column)
                    newColumn.children = applyDrag(newColumn.children, dropResult)
                    scene.children.splice(columnIndex, 1, newColumn)
                    this.scene = scene
                }
            },
            getCardPayload (columnId) {
                return index => {
                    return this.scene.children.filter(p => p.id === columnId)[0].children[index]
                }
            },
            dragStart () {
                console.log('drag started')
            },
            log (...params) {
                console.log(...params)
            }
        }
    }
</script>

<style scoped>
.right-panel {
    flex-grow: 1;
    border: 1px solid #d8d8d8;
    overflow: auto;
}
.card-scene {
    padding: 50px;
    /* background-color: #fff; */
}
.card-container {
    width: 320px;
    padding: 10px;
    margin: 5px;
    margin-right: 45px;
    background-color: #f3f3f3;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.24);
}

.card {
    margin: 5px;
    /* border: 1px solid #ccc; */
    background-color: white;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.24);
    padding: 10px;
}

.card-column-header {
    font-size: 18px;
}

.column-drag-handle {
    cursor: move;
    padding: 5px;
}

.card-ghost {
    transition: transform 0.18s ease;
    transform: rotateZ(5deg)
}

.card-ghost-drop {
    transition: transform 0.18s ease-in-out;
    transform: rotateZ(0deg)
}
</style>