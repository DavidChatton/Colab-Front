import axios from 'axios';

import viewPage from '../views/page';
import viewListUsers from '../views/list-users';

const Search = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.data = [];

    this.run();
  }

  render() {
    return `
      ${viewPage(`
        <div class="row list-users">
        ${viewListUsers(this.data)}
      </div>
      `)}
    `;
  }

  filters(param, data, filter) {
    let updateData = data;

    if (param) {
      updateData = updateData.filter(filter);
    }

    return updateData;
  }

  run() {
    const { results } = this.params;

    axios
      .get(`https://randomuser.me/api/0.8/?results=${results}`)
      .then((res) => {
        const { data } = res;
        const { age } = this.params;

        this.data = this.filters(
          parseInt(age, 10),
          data.results,
          ({ user }) => (
            new Date(
              new Date().getTime() - new Date(user.dob * 1000).getTime()
            ).getFullYear() - 1970 > age
          )
        );

        this.el.innerHTML = this.render();
      });
  }
};

export default Search;
