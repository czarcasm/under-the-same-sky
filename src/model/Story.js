import { Page } from './Page.js';

export class Story {
    /**
     * @param {string} title 
     * @param {Object} [metadata={}] 
     * @param {Array<Page>} [pages=[]] 
     */
    constructor(title, metadata = {}, pages = []) {
        if (typeof title !== 'string') {
            throw new TypeError('Story title must be a string');
        }
        this._title = title;
        this._metadata = { ...metadata, createdAt: metadata.createdAt || new Date().toISOString() };
        this._pages = [...pages];
    }

    get title() { return this._title; }
    get metadata() { return Object.freeze({ ...this._metadata }); }
    get pages() { return Object.freeze([...this._pages]); }

    /**
     * @param {Page} page 
     */
    addPage(page) {
        if (!(page instanceof Page)) {
            throw new TypeError('Must provide a valid Page instance');
        }
        // Ensure slug uniqueness inside a single keepsake engine instance
        if (this._pages.some(p => p.slug === page.slug)) {
            throw new Error(`A page with slug "${page.slug}" already exists in this story.`);
        }
        this._pages.push(page);
    }

    serialize() {
        return {
            title: this._title,
            metadata: this._metadata,
            pages: this._pages.map(page => page.serialize())
        };
    }
}