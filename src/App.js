import State from "./components/State";
import Effect from "./components/Effect";
import Context from "./components/Context";
import Ref from "./components/Ref";
import Reducer from "./components/Reducer";
import Memo from "./components/Memo";
import Callback from "./components/Callback";
import LayoutEffect from "./components/LayoutEffect";

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
      <hr />

      <Memo />
      <hr />

      <Callback />
      <hr />

      <LayoutEffect />
      <hr />
    </div>
  );
}

export default App;
