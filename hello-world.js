const template = document.createElement('template');
template.innerHTML = `
  <style>
    * {
      font-size: 150%;
      text-align: center;
    }

    span {
      width: 4rem;
      display: inline-block;
    }

    h3 { 
      text-align: left;
    }
      
    button {
      color: black;
    }
  </style>
  <h3>Stateful web component test</h3>
  <button id="dec">-</button>
  <span id="count"></span>
  <button id="inc">+</button>`;

class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.getElementById('inc').onclick = () => this.inc();
    this.shadowRoot.getElementById('dec').onclick = () => this.dec();
    this.update(this.count);
  }

  inc() {
    if (this.count === 10) {
      return;
    } else {
      this.update(++this.count);
    }
  }

  dec() {
    if (this.count === 0) {
      return;
    } else {
      this.update(--this.count);
    }
  }

  update(count) {
    this.shadowRoot.getElementById('count').innerHTML = count;
  }
}

customElements.define('hello-world', MyCounter);

