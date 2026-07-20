export class Section {
    /**
     * @param {string} title 
     * @param {Array} [blocks=[]] 
     */
    constructor(title, blocks = []) {
        if (typeof title !== 'string') {
            throw new TypeError('Section title must be a string');
        }
        this._title = title;
        this._blocks = [...blocks];
    }

    get title() {
        return this._title;
    }

    get blocks() {
        return Object.freeze([...this._blocks]); // Prevent direct array mutation
    }

    /**
     * @param {Object} block - An object adhering to the block interface (has serialize)
     */
    addBlock(block) {
        if (!block || typeof block.serialize !== 'function') {
            throw new Error('Invalid block: must implement a serialize() method');
        }
        this._blocks.push(block);
    }

    serialize() {
        return {
            title: this._title,
            blocks: this._blocks.map(block => block.serialize())
        };
    }
}