import React, { Component } from 'react';
import { HashRouter, Route, Switch ,hashHistory} from 'react-router-dom';
import './App.scss';

// Containers
const DefaultLayout = React.lazy(() => import('./layouts/DefaultLayout.jsx'));
const Home = React.lazy(() => import('./components/Home.jsx'))
// Pages
// const Login = React.lazy(() => import('./views/Pages/Login'));
// const Register = React.lazy(() => import('./views/Pages/Register'));
// const Page404 = React.lazy(() => import('./views/Pages/Page404'));
// const Page500 = React.lazy(() => import('./views/Pages/Page500'));

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

class AppLazyLoad extends Component {

  render() {
    return (
        <HashRouter history={hashHistory}>
        <React.Suspense fallback={loading()}>
            <Switch>
            <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
        </React.Suspense>

        </HashRouter>
    );
  }
}

export default AppLazyLoad;
