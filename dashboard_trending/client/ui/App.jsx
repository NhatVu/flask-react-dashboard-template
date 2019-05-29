import React, { Component } from 'react';
import { HashRouter, Route, Switch ,hashHistory} from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
// import DefaultLayout from './layouts/DefaultLayout.jsx'
import Home from './components/Home'
import DefaultLayout from './layouts/DefaultLayout'
// const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
// const DefaultLayout = React.lazy(() => imprt('./layouts/DefaultLayout.jsx'));
// const Home = React.lazy(() => import('./components/Home.jsx'))
// Pages
// const Login = React.lazy(() => import('./views/Pages/Login'));
// const Register = React.lazy(() => import('./views/Pages/Register'));
// const Page404 = React.lazy(() => import('./views/Pages/Page404'));
// const Page500 = React.lazy(() => import('./views/Pages/Page500'));

class App extends Component {

  render() {
    return (
        <HashRouter history={hashHistory}>
         <div>
          {/* <Route path='/' component={Home} /> */}
          <Route path="/" component={DefaultLayout} />
         </div>
        </HashRouter>
    );
  }
}

export default App;
