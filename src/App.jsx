import {CssBaseline} from '@material-ui/core';
import React from 'react';
import Guided from './components/guided/Guided';
import Sprint from './components/sprint/Sprint';

function App() {
  return (
      <>
        <CssBaseline />
        <Guided />
        <Sprint />
      </>
  );
}

export default App;