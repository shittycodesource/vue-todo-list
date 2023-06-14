export default {
    data() {
        return {
            isFocused: false
        }
    },
    methods: {
        onFocus() {
            this.isFocused = true
        },
        onBlur() {
            this.isFocused = false
        }
    }
}