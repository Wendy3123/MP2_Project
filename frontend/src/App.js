import "./App.css";
import Home from "./Home.js";

const headerStyle = {
  fontSize: "45px",
  background: "linear-gradient(27deg, #7928CA, #FF0080)",
};

function App() {
  return (
    <div className="App">
      <Home headerStyle={headerStyle} />
    </div>
  );
}

export default App;
