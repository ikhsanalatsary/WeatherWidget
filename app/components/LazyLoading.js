import React from 'react';
import Loading from 'react-loading';

const LazyLoading = () => {
  return (
    <div style={{marginLeft: 10 + 'em'}}>
      <Loading type='bars' color='#E2E2E2' />
    </div>
  );
};

export default LazyLoading;
