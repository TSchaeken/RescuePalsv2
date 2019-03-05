import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './pages/Main';
import Listing from './pages/Listing';
import Contact from './pages/Contact';
import DogInfo from './pages/DogInfo';
import Donate from './pages/Donate';

import fetchPets from './helpers';

import 'sanitize.css';
import './style.scss';

const App = () => {
  const [data, setData] = useState([]);
  const [featured, setFeatured] = useState(null);

  async function fetchData() {
    const adopt = await fetchPets();
    setData(adopt);
    const feature = adopt[Math.floor(Math.random() * adopt.length)];
    setFeatured(feature);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <>
        <Header />
        <div className="spacer" />
        <Switch>
          <Route
            exact
            path="/"
            // eslint-disable-next-line no-shadow
            render={() => {
              return <Main featured={featured} />;
            }}
          />
          <Route path="/adopt" render={() => <Listing data={data} />} />
          <Route path="/contact" component={Contact} />
          <Route path="/donate" component={Donate} />
          <Route exact path="/dog/:name" component={DogInfo} />
        </Switch>
      </>
    </Router>
  );
};

export default hot(App);
