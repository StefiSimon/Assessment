import ReactDOM from 'react-dom';
import React from 'react';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import App from './components/app/App';
import Product from './components/product-page/Product';

import './index.scss';
import './assets/font-awesome/scss/font-awesome.scss';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={Product}/>
        </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('root')
);
