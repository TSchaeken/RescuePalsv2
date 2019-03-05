import React from 'react';

import Banner from '../components/Banner';
import Feature from '../components/Feature';
import Info from '../components/MainInfo';
import Page from '../components/Page';

const Main = ({ featured }) => {
  return (
    <div>
      <Banner />
      <Page>
        <Feature featured={featured} />
        <Info />
      </Page>
    </div>
  );
};
export default Main;
