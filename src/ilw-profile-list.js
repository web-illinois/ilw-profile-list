import { LitElement, html, unsafeCSS } from "lit";
import styles from './ilw-profile-list.styles.css?inline';
import { styleMap } from 'lit/directives/style-map.js';
import './ilw-profile-list.css';

class ProfileList extends LitElement {

    static get properties() {
        return {
            padding: { type: String, attribute: true },
            circle: { type: Boolean, attribute: true }
        };
    }

    static get styles() {
        return unsafeCSS(styles);
    }

    constructor() {
        super();
        this.circle = false;
        this.padding = '';
    }

    get paddingStyle() {
        return this.padding == '' ? {} : {
            padding: this.padding
        };
    }

    render() {
        return html`
            <div class="container" style="${styleMap(this.paddingStyle)}">
                <div class="name"><slot name="name"></slot></div>
                <div class="image"><slot name="image"></slot></div>
                <div class="subtitle"><slot name="subtitle"></slot></div>
                <div class="main"><slot></slot></div>
            </div>
        `;
    }
}

customElements.define('ilw-profile-list', ProfileList);