import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Landing from './Pages/Landing';
import App from './App';
import Dashboard from './Pages/Dashboard';
import Client from './Pages/Client';
import ViewReports from './Pages/ViewReports';
import ReportsBuilder from './Pages/ReportsBuilder';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/landing" component={Landing} />
            <Route path="/" component={App} />
            <Route path="/dashboard" component={Dashboard} />
            {/* <Route path="dashboard/client/" component={Client} />
            <Route path="dashboard/reports/:id" component={ViewReports} />
            <Route path="dashboard/reportbuilder/:id" component={ReportsBuilder} /> */}
        </div>
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();