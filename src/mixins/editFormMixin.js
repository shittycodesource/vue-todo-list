export default {
    methods: {
        emitOption(option) {
            this.$emit('emitOption', option)
        }
    },
    computed: {
        lineCount() {
            return this.textValue.split('\n').length;
        },
        isMaxLines() {
            return this.lineCount >= this.maxLines;
        },
        linesMessage() {
            if (this.textValue.length) {
                return `${this.textValue.length} / ${this.maxCharacters}`;
            }
        },
        maxLinesMessage() {
            if (this.textValue.length) {
                return `(${this.maxLines} lines max)`;
            }
        }
    }
};