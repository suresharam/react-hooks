import State from './components/State';
import Effect from './components/Effect';

import './App.css';
import Context from './components/Context';

function App() {
  return (
    <div className="App">
      <State />
      <hr />

      <Effect />
      <hr/>

      <Context />
      <hr />
    </div>
  );
}

export default App;
