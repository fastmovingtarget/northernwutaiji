import ActivityProvider from './ActivityContext/ActivityContext';
import './App.css';
import Router from './Router'
import "react-multi-carousel/lib/styles.css";

function App() {
  return (
    <div className="App">
      <ActivityProvider>
        <Router />
      </ActivityProvider>
    </div>
  );
}

export default App;
