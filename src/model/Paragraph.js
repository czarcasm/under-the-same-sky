export class Paragraph {
    /**
     * @param {string} text 
     */
    constructor(text) {
        if (typeof text !== 'string') {
            throw new TypeError('Paragraph text must be a string');
        }
        this._text = text;
        this.type = 'paragraph';
    }

    get text() {
        return this._text;
    }

    /**
     * Converts the block to a plain data object for JSON storage.
     * @returns {Object}
     */
    serialize() {
        return {
            type: this.type,
            text: this._text
        };
    }
}