import { LitElement, html, unsafeCSS } from "lit";
// @ts-ignore
import styles from './ilw-profile-list.styles.css?inline';
import { styleMap } from 'lit/directives/style-map.js';
import './ilw-profile-list.css';
import { customElement, property, query, state } from "lit/decorators.js";
@customElement('ilw-profile-list')
export default class ProfileList extends LitElement {
    @property({ type: String }) 
    padding: string = '';

    @property({ type: Boolean }) 
    circle: boolean = false;

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

declare global {
interface HTMLElementTagNameMap {
    "ilw-profile-list": ProfileList;
  }
}