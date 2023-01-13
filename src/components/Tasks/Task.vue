<template>
    <div class="task" :class="{'completed': data.completed}">
        <header class="task__header">
            <h3 class="task__title">{{ data.title }}</h3>
            <time class="task__date" datetime="1231231231">{{ data.date | dateToHours }} | {{ data.dayValue }}</time>
        </header>
        <div class="task__content">
            {{data.text}}
        </div>
        <footer class="task__footer">
            <div class="task__actions">
                <slot name="task-actions"></slot>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'Task',
        props: {
            data: {
                type: Object,
                default: {},
                required: true
            },
        },
    }
</script>

<style lang="scss">
    .task {
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        width: 900px;
        min-height: 180px;

        margin: 0 auto;
        padding: 15px;

        background: $blockBackgroundColor;
        box-shadow: $baseBoxShadow;
        border-radius: 18px;

        &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__title {
            line-height: 0;
            font-weight: 500;
        }

        &__content {
            margin-bottom: 10px;

            overflow: hidden;
            -webkit-line-clamp: 3;
            text-overflow: ellipsis;
            word-break: break-word;
            white-space: pre-line;
            display: -webkit-box;
            -webkit-box-orient: vertical;

            font-size: 14px;
            line-height: calc(14 * 1.5 / 10);

            color: $textColor;
        }

        &__footer,
        &__actions {
            display: flex;
            align-content: center;
        }

        &__actions {
            width: 100%;
            gap: 20px;
        }

        &__date {
            color: $mainColor;
        }

        &.completed {
            box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, .1);
            opacity: .6;
        }      

        &.completed &__content {
            text-decoration: line-through;
        } 

        &--page-task {
            width: 100%;
            height: unset;

            .task__actions {
                width: unset;
                gap: 20px;
            }

            .task__content {
                -webkit-line-clamp: unset;
            }
        }

        @media (max-width: $tabletBP) {
            width: calc(50% - 15px);
        }

        @media (max-width: $mobileBP) {
            width: 100%;
        }
    }
</style>