import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import App from './App';
import Landing from './Pages/Landing';
import Dashboard from './Pages/Dashboard';
import ReportsBuilder from './Pages/ReportsBuilder'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Router>
    <div>
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/" component={App} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/reportsBuilder" component={ReportsBuilder} />
    </div>
</Router>, document.getElementById('root'));

registerServiceWorker();