import viewRegister from '../views/register';

const Register = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  render() {
    return `
      ${viewRegister(`
        <h1>Hello Register</h1>
      `)}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Register;
