import React from 'react';
import Loading from 'react-loading';
const styles = {
  position: 'absolute',
  left: `50%`,
  right: `50%`,
  margin: `-30px 0 0 -20px`
}

const LazyLoading = () => {
  return (
    <div style={styles}>
      <Loading type='bars' color='#E2E2E2' />
    </div>
  );
};

export default LazyLoading;
