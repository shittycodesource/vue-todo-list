export default {
    data() {
        return {
            isDropdownOpen: false
        }
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        }
    },
};