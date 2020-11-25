import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Homepage from './Homepage';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Monsterrat',
      
    ].join(','),
  },});

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <div className = 'App'>
        <Homepage />
      </div>
    </ThemeProvider>
  );
}

export default App;
