import Router from './Router';
import Search from './controllers/Search';
import Dashboard from './controllers/Dashboard';
import Register from './controllers/Register';
import Login from './controllers/Login';
import FlatshareChoices from './controllers/FlatshareChoices';
import CreateFlatshare from './controllers/CreateFlatshare';
import JoinFlatshare from './controllers/JoinFlatshare';
import Calendar from './controllers/Calendar';
import Profil from './controllers/Profil';
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
  url: '/choix-colocation',
  controller: FlatshareChoices
},
{
  url: '/cree-colocation',
  controller: CreateFlatshare
},
{
  url: '/rejoindre-colocation',
  controller: JoinFlatshare
},
{
  url: '/evenements',
  controller: Calendar
},
{
  url: '/profil',
  controller: Profil
},
{
  url: '/search',
  controller: Search
}];

new Router(routes);
