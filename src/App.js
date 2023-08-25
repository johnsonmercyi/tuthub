import { HashRouter } from 'react-router-dom';
import './App.css';

import AppContainer from './containers/AppContainer/AppContainer';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <AppContainer />
      </HashRouter >
    </div>
  );
}

export default App;