import State from "./components/State";
import Effect from "./components/Effect";
import Context from "./components/Context";
import Ref from "./components/Ref";
import Reducer from "./components/Reducer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <State />
      <hr />

      <Effect />
      <hr />

      <Context />
      <hr />

      <Ref />
      <hr />

      <Reducer />
    </div>
  );
}

export default App;
