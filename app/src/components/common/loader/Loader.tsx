import React from 'react';

import styles from './loader.module.sass';

const Loader = () => {
  return (
    <div className={`loader-container ${styles['loader-container']}`}>
      <span className={`loader ${styles.loader}`} />
    </div>
  );
};

export default Loader;
