import logo from './logo.svg';
import './scss/main.scss';
import Navigation from './navigation/Navigation';
import { ScreenProvider } from './context/ScreenContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <ScreenProvider>
        <Navigation />
      </ScreenProvider>
    </ThemeProvider>
  );
}

export default App;
