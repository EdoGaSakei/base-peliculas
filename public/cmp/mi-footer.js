class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2020 Julio Edgar Ortega Astudillo.`;
    }
}
customElements.define("mi-footer", MiFooter);