export class ContentBlock {
    constructor(type, properties = {}) {
        if (typeof type !== 'string') throw new TypeError('Block type must be a string');
        this.type = type;
        this.properties = properties;
    }

    serialize() {
        return {
            type: this.type,
            ...this.properties
        };
    }
}