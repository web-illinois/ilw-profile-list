import { LitElement, html, unsafeCSS } from "lit";
import styles from './ilw-profile-list.styles.css?inline';
import './ilw-profile-list.css';

class ProfileList extends LitElement {

    static get properties() {
        return {
            theme: { type: String, attribute: true }
        };
    }

    static get styles() {
        return unsafeCSS(styles);
    }

    constructor() {
        super();
        this.theme = '';
    }

    render() {
        return html`
            <div class="container">
                <div><slot name="image"></slot></div>
                <div><slot name="name"></slot></div>
                <div><slot name="subtitle"></slot></div>
                <div><slot></slot></div>
            </div>
        `;
    }
}

customElements.define('ilw-profile-list', ProfileList);