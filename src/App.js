import "./App.css";
import Demo from "./components/Demo";
import ErrorBoundary from "./components/ErrorBoundary";
import Contact from './Contact';
import Welcome from "./Welcome";

function App() {
  return (
    <>
    <Welcome/>
    
    <Contact/>
    
      
    </>
  );
}

export default App;
/*<Demo place="Delhi" />
      <ErrorBoundary>
        <Demo />
      </ErrorBoundary>*/