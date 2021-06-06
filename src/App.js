import State from "./components/State";
import Effect from "./components/Effect";

import "./App.css";
import Context from "./components/Context";
import Ref from "./components/Ref";

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
    </div>
  );
}

export default App;
