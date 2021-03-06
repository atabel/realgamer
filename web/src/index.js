/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, browserHistory} from 'react-router';

import App from './App';
import GamesList from './components/games-list';
import rootReducer from './reducers/index';
import {fetchGames} from './actions/games';
import './css/box-sizing.css';
import './css/reset.css';
import './css/app.css';

injectTapEventPlugin();

const logger = createLogger();

// logger must be the last one!
const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <Route
                        path="platform/:id/games"
                        component={GamesList}
                        onEnter={({params}) => {
                            store.dispatch(fetchGames(params.id));
                        }}
                    />
                </Route>
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'),
);
