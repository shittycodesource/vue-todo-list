<template>
    <div class="task" :class="{'completed': data.completed}">
        <div class="task__content">
            {{data.text}}
        </div>
        <div class="task__actions">
            <BaseButton>Open</BaseButton>
            <BaseButton @click.native="completeThisTask">Complete</BaseButton>
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
            data: {
                type: Object,
                default: {},
                required: true
            }
        },
        components: {
            BaseButton
        },
        methods: {
            ...mapActions([
                'deleteTask',
                'completeTask'
            ]),
            deleteThisTask() {
                this.deleteTask(this.data.id);
            },
            completeThisTask() {
                this.completeTask(this.data);
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

        &.completed {
            box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, .1);
            opacity: .8;
        }      

        &.completed &__content {
            text-decoration: line-through;
            color: #464646;
        } 

        @media (max-width: $tabletBP) {
            width: calc(50% - 15px);
        }

        @media (max-width: $mobileBP) {
            width: 100%;
        }
    }
</style>