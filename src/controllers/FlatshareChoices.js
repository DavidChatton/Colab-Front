import viewflatshareChoices from '../views/flatshare/flatshareChoices';

const FlatshareChoices = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  render() {
    return `
    ${viewflatshareChoices()}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default FlatshareChoices;
