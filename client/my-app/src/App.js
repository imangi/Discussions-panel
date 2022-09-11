import "./App.css";
import Share from "./components/Share";
import Comment from "./components/Comment";

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
          <Comment />
        </div>
      </body>
    </div>
  );
}

export default App;
