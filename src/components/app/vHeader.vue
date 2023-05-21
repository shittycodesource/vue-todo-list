<template>
    <header class="header">
        <div class="header__inner">
            <h5 class="header__title">{{ getHeaderTitle }}</h5>
            <div class="header__center" v-if="isListOpened">
                <div class="really-important">
                    <span>Boss Healtbar</span><v-icon name="#right" height="16px" width="22px"/>
                </div>
                {{ getListProgress(getListTasks) }}%
                <v-progress :fill="getListProgress(getListTasks)" class="header__progress"/>
                {{ getIncompleteTasksNumber(getList($route.query.listId).tasks) }} Tasks Left
            </div>
            <div class="header__actions" v-if="isListOpened">
                <dropdown :isOpened="isDropdownOpen">
                    <template><div class="dropdown-title" @click="toggleDropdown">Sort By</div></template>
                    <template #options>
                        <v-button
                            class="btn--choose"
                            v-for="btn in buttons"
                            :key="btn.name" 
                            @click="btn.handler"
                            :class="{'active': getTasksSortType == btn.name.toLowerCase()}"
                        >
                            {{ btn.name }}
                        </v-button>
                    </template>
                </dropdown>
            </div>
        </div>
    </header>
</template>

<script>
    import Dropdown from '../Dropdown.vue'
    import vButton from '../Inputs/vButton.vue'
    import vProgress from '../vProgress.vue'
    import dropdownMixin from '../../mixins/dropdownMixin';
    import vIcon from './vIcon.vue';
    import { mapGetters } from 'vuex';

    export default {
        name: 'vHeader',
        components: { Dropdown, vButton, vProgress, vIcon },
        mixins: [ dropdownMixin ],
        data() {
            return {
                buttons: [
                    { name: 'Date', handler: () => this.sortTaskBy('date') },
                    { name: 'Complete', handler: () => this.sortTaskBy('complete') },
                    { name: 'Incomplete', handler: () => this.sortTaskBy('incomplete') },
                ],
            }
        },
        computed: {
            ...mapGetters(['getList', 'getListProgress', 'getHeaderTitle', 'getIncompleteTasksNumber']),
            isListOpened() {
                if (this.$route.name == 'tasks') {
                    return true;
                }

                return false;
            },
            getListTasks() {
                const list = this.getList(this.$route.query.listId);
                return list.tasks;
            }
        },
    }
</script>

<style lang="scss">
    .header {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        // width: calc(100% - $sidebarWidth);
        height: $headerHeight;

        position: absolute;
        top: 0;
        left: $sidebarWidth; 
        right: 0;

        background: #fff;
        border-bottom: 1px solid var(--lite);
    
        &__inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 25px;
            width: 100%;
        }

        &__title {
            font-weight: 400;
            font-size: 20px;    
            color: var(--main-text);
            text-transform: capitalize;
            line-height: 0;
        }

        &__center {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 500px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            .really-important {
                display: flex;
                align-items: center;
                word-break: keep-all;
            }
        }

        &__progress {
            max-width: 300px;
            width: 100%;   
        }
    }
</style>