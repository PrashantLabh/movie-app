import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./screens/home/Home";
import Movie from "./screens/details/Details";
import NotFound from "./common/NotFound/NotFound";
import Layout from "./common/layout/Layout";
import BookMovie from "./screens/bookshow/BookShow";

//CLIENT SIDE REACT APP COMPONENT
const App = () => <BrowserRouter>
	<Switch>
	  	<Route exact path="/" render={() => <Layout renderComp =  {Home} />} />
	    <Route path="/movie/:id" render={() => <Layout renderComp = {Movie} />} />
		<Route path="/movie-book/:id" render={() => <Layout renderComp = {BookMovie} />} />
	    <Route path="*" render={() => <Layout renderComp = {NotFound} />}  />
	</Switch>
</BrowserRouter>;

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
