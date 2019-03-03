import React, { useState, useEffect } from 'react';

import Header from './Header';
import Banner from './Banner';
import Feature from './Feature';
import Info from './MainInfo';
import Page from './Page';

import fetchPets from '../helpers';

const Main = () => {
  const [data, setData] = useState([]);
  const [featured, setFeatured] = useState(null);

  async function fetchData() {
    const adopt = await fetchPets();
    setData(adopt);
    const feature = adopt[Math.floor(Math.random() * adopt.length)];
    console.log(feature);
    setFeatured(feature);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const pages = [
    { text: `Adopt A Friend`, href: `#` },
    { text: `Donate`, href: `#` },
    { text: `Contact`, href: `#` }
  ];
  return (
    <div>
      <Header pages={pages} />
      <Banner />
      <Page>
        <Feature featured={featured} />
        <Info />
      </Page>
    </div>
  );
};
export default Main;
