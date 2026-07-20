import { Section } from './Section.js';

export class Page {
    /**
     * @param {string} title 
     * @param {string} slug 
     * @param {Array<Section>} [sections=[]] 
     */
    constructor(title, slug, sections = []) {
        if (typeof title !== 'string' || typeof slug !== 'string') {
            throw new TypeError('Page title and slug must be strings');
        }
        this._title = title;
        this._slug = slug.toLowerCase().replace(/\s+/g, '-');
        this._sections = [...sections];
    }

    get title() { return this._title; }
    get slug() { return this._slug; }
    get sections() { return Object.freeze([...this._sections]); }

    /**
     * @param {Section} section 
     */
    addSection(section) {
        if (!(section instanceof Section)) {
            throw new TypeError('Must provide a valid Section instance');
        }
        this._sections.push(section);
    }

    serialize() {
        return {
            title: this._title,
            slug: this._slug,
            sections: this._sections.map(section => section.serialize())
        };
    }
}