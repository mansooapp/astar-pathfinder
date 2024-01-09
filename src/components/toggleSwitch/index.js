class ToggleSwitch extends HTMLElement {
  constructor(label = '', onChange = () => {}) {
    super();

    this.label = label;
    this.onChange = onChange;
    this.template = `
      <div style="width: 100%;">
        <label>
          <input role="switch" type="checkbox" value="off" />
          <span>{label}</span>
        </label>
      </div>
    `;
  }

  connectedCallback() {
    this.label = this.getAttribute('label');
    this.value = this.getAttribute('value');
    this.disabled = this.getAttribute('disabled');

    const toggleSwitch = document.createElement('div');
    this.appendChild(toggleSwitch);
    this.innerHTML = this.template.replace('{label}', this.label);

    if (this.value === 'on') {
      this.querySelector('input').checked = true;
    }

    if (this.disabled) {
      this.querySelector('input').disabled = true;
    }
  }
}

customElements.define('toggle-switch', ToggleSwitch);