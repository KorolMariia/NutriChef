import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import RoutesList from './routes/RouterList';
import Nav from './Components/Nav';
import './App.css';
import Footer from './Components/Footer';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className='wrapper'>
          <Nav />
          <div className="container">
            <RoutesList />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
