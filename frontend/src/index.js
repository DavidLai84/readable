import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import createBrowserHistory from 'history/createBrowserHistory'
import App from './App'
import reducer from './reducers'
import './index.css'

const history = createBrowserHistory()

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker()