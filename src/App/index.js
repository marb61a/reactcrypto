import React, { Component } from 'react';
import './App.css';

import AppLayout from './AppLayout';
import AppBar from './AppBar';

class App extends Component {
  render() {
    return (
     <AppLayout>
       <AppBar />
     </AppLayout>
    );
  }
}

export default App;
