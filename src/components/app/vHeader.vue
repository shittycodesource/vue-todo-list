<template>
    <header class="header">
        <div class="header__inner">
            <h5 class="header__title">{{ getHeaderTitle }}</h5>
            <div class="header__center" v-if="isListOpened">
                <v-progress :fill="getListProgress(getListTasks)"/>
            </div>
            <div class="header__actions">
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
    import { mapGetters } from 'vuex';

    export default {
        name: 'vHeader',
        components: { Dropdown, vButton, vProgress },
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
            ...mapGetters(['getList', 'getListProgress', 'getHeaderTitle']),
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
            
        }
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
            max-width: 300px;
            width: 100%;
        }
    }
</style>