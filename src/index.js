import Router from './Router';
import Search from './controllers/Search';
import Home from './controllers/Home';
import Register from './controllers/Register';

import './index.scss';

const routes = [{
  url: '/',
  controller: Home
},
{
  url: '/register',
  controller: Register
},
{
  url: '/search',
  controller: Search
}];

new Router(routes);
