import "./App.css";
import Share from "./components/Share/Share";
import All from "./components/All/All";

function App() {
  return (
    <div className="appsite">
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
