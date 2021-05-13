import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import Contenedor from './navigation/NavigationContainer'

const App = () => {
  return (
    <Provider store={store}>
      <Contenedor/>
    </Provider>
    
  );
};


export default App;