import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import App from './App';
import Landing from './Pages/Landing';
import Dashboard from './Pages/Dashboard';
import ReactModal from 'react-modal';
import registerServiceWorker from './registerServiceWorker';

ReactModal.setAppElement('#root')

ReactDOM.render(
<Router>
    <div>
        <Route exact path="/landing" component={Landing} />
        <Route path="/" component={App} />
        <Route path="/dashboard" component={Dashboard} />
    </div>
</Router>, 
document.getElementById('root'));
registerServiceWorker();