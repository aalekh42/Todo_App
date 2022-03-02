import "./App.css";
import Demo from "./components/Demo";
import ErrorBoundary from "./components/ErrorBoundary";
import Contact from "./Contact";
import Welcome from "./Welcome";

function App() {
  return (
    <>
      <div className="app-container container-fluid">
        <div className="row">
          <Welcome />
        </div>
      </div>
    </>
  );
}

export default App;
/*<Demo place="Delhi" />
      <ErrorBoundary>
        <Demo />
      </ErrorBoundary>*/
