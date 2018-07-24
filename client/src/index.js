import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Landing from './Pages/Landing';
import App from './App';
import Dashboard from './Pages/Dashboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Router>
    <div>
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/" component={App} />
        <Route exact path="/dashboard" component={Dashboard} />
    </div>
</Router>, document.getElementById('root'));

registerServiceWorker();