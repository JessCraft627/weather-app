import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import './css/home.css';
import './css/city.css';
import './css/login.css';
import Login from './components/Login';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'

const store = createStore(reducer)

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Login} />
        <Route path="/weather" component={App} />
      </React.Fragment>
    </Router>
  </Provider>),
  document.getElementById('root')
);

registerServiceWorker();
