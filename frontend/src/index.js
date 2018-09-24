import React from 'react';
import ReactDOM from 'react-dom';
import 'material-components-web/dist/material-components-web.min.css';
import App from './container/App';
import WebFont from 'webfontloader'
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import rootReducer from './reducers'
// import { routerMiddleware } from 'react-router-redux'
// import { history } from './history'


WebFont.load({
  google: {
    families: ['Roboto:300,500,700','Material Icons']
  }
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = createStore( 
//     rootReducer,
//     applyMiddleware(thunk)
//     )

// const middlewareHistory = routerMiddleware(history)
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
      )
    )

// const store = createStore(
//   rootReducer,
//   composeEnhancers(
//     applyMiddleware(middlewareHistory, thunk)
//   )
// )
// const store = () => createStore(rootReducer, applyMiddleware(thunk));

// export default store;

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
