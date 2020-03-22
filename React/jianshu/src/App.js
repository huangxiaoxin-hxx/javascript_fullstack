import React from 'react';
import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
