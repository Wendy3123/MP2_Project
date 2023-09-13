import "./App.css";
import Home from "./Home.js";

const backgroundAllPages = {
  backgroundColor: "plum",
};
const headerStyle = {
  fontSize: "52px",
  background: "linear-gradient(27deg, #7928CA, #FF0080)",
  margin: "auto",
  padding: "10px 0 10px 0",
};

function App() {
  return (
    <div className="App" style={backgroundAllPages}>
      <Home headerStyle={headerStyle} />
    </div>
  );
}

export default App;
