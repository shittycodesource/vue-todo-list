<template>
    <div class="task">
        <div class="task__content">
            {{text}}
        </div>
        <div class="task__actions">
            <BaseButton>Open</BaseButton>
            <BaseButton class="btn--delete" @click.native="deleteThisTask">Delete</BaseButton>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import BaseButton from '@/components/app/BaseButton.vue';

    export default {
        name: 'Task',
        props: {
            text: {
                type: String,
                default: 'Empty',
            },
            id: {
                type: Number,
                default: 0,
                required: true
            }
        },
        components: {
            BaseButton
        },
        methods: {
            ...mapActions([
                'deleteTask'
            ]),
            deleteThisTask() {
                this.deleteTask(this.id);
            }
        }
    }
</script>

<style lang="scss">
    .task {
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        width: calc(33.3333333% - 15px);
        min-height: 160px;

        padding: 10px;

        background: #fff;
        box-shadow: $baseBoxShadow;

        &__content {
            margin-bottom: 10px;

            line-height: 1.4;
            overflow: hidden;
            -webkit-line-clamp: 4;
            text-overflow: ellipsis;
            word-break: break-word;
            white-space: pre-line;
            display: -webkit-box;
            -webkit-box-orient: vertical;
        }

        &__actions {
            display: flex;
            align-content: center;
            justify-content: space-between;
        }
    }
</style>