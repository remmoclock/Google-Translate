import TextBox from "./Components/TextBox";
import Arrows from "./Components/Arrows";

function App() {
  return (
    <div className="app">
      <TextBox style="input" />
      <Arrows />
      <TextBox style="output" />
    </div>
  );
}

export default App;
