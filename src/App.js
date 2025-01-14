import './App.css';
import Home from './components/Home';
import { useTheme } from './context/ThemeContext'

function App() {
  const { theme } = useTheme();
  const themeStyle = {
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
    height: '600px'
  }
  return (
    <div className="App" style={themeStyle}>
      <Home />
    </div>
  );
}

export default App;
