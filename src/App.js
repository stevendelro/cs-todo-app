import HomePage from "./components/HomePage/HomePage";
import AppBar from './components/Layout/AppBar'
import Toolbar from '@material-ui/core/Toolbar';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Toolbar />
      <HomePage />
    </div>
  );
}

export default App;
