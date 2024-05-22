import Router from './Router';
import Search from './controllers/Search';
import Dashboard from './controllers/Dashboard';
import Register from './controllers/Register';
import Login from './controllers/Login';
import './index.scss';

const routes = [{
  url: '/tableau-de-bord',
  controller: Dashboard
},
{
  url: '/inscription',
  controller: Register
},
{
  url: '/connexion',
  controller: Login
},
{
  url: '/search',
  controller: Search
}];

new Router(routes);
