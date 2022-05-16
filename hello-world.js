class HelloWorld extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `Hello world.  I'm a web component`;
  }
}

//register the new custom element
customElements.define('hello-world', HelloWorld);
