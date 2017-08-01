import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { Router, Route, IndexRoute, hashHistory } from "react-router";

// ReactDOM.render(
// 	<Router history={hashHistory}>
// 	    <Route path="/" component={App}>

// 	    </Route>
//   	</Router>,
// app);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
