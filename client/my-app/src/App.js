import "./App.css";
import Share from "./components/Share";
import All from "./components/All";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <body>
        <div>
          <p>Comment</p>
        </div>
        <div>
          <Share />
        </div>
        <div>
          <All />
        </div>
      </body>
    </div>
  );
}

export default App;
